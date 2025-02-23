import { BaseComponent } from "./baseComponent.ts";
import { RenderResult } from "./types.ts";

export type UserState = {
  username: string;
  isLoading: boolean;
  error: string | null;
  lastUpdated: Date | null;
};
export type UserProps = { userId: string; theme: "light" | "dark"; onUserLoad?: (username: string) => void };

// Concrete Component Class
export class User extends BaseComponent<UserProps, UserState> {
  private fetchController: AbortController | null = null;

  protected getInitialState() {
    return {
      username: "",
      isLoading: true,
      error: null,
      lastUpdated: null,
    };
  }

  protected override async componentDidMount(): Promise<void> {
    await this.fetchUserData();
  }

  protected override componentWillUnmount(): void {
    // Cleanup any pending requests
    if (this.fetchController) {
      this.fetchController.abort();
    }
  }

  protected override shouldComponentUpdate(nextProps: UserProps, nextState: UserState): boolean {
    // Optimize updates
    return (
      this.props.userId !== nextProps.userId ||
      this.props.theme !== nextProps.theme ||
      this.state.username !== nextState.username ||
      this.state.isLoading !== nextState.isLoading ||
      this.state.error !== nextState.error
    );
  }

  protected render(): RenderResult {
    if (this.state.error) {
      return {
        type: "div",
        props: { className: "error", "data-theme": this.props.theme },
        children: [
          {
            type: "span",
            props: { className: "error-message" },
            children: [
              {
                type: "span",
                props: { textContent: this.state.error },
              },
            ],
          },
        ],
      };
    }

    if (this.state.isLoading) {
      return {
        type: "div",
        props: { className: "loading", "data-theme": this.props.theme },
        children: [
          {
            type: "span",
            props: { textContent: "Loading..." },
          },
        ],
      };
    }

    return {
      type: "div",
      props: {
        className: `user-profile`,
        "data-user-id": this.props.userId,
        "data-theme": this.props.theme,
      },
      children: [
        {
          type: "span",
          props: {
            className: "username",
            textContent: this.state.username,
          },
        },
        {
          type: "button",
          props: {
            onClick: () => this.handleRefresh(),
            textContent: "Refresh",
          },
        },
      ],
    };
  }

  // Component-specific methods
  private async fetchUserData(): Promise<void> {
    this.setState({ isLoading: true, error: null });

    this.fetchController = new AbortController();

    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${this.props.userId}`, {
        signal: this.fetchController.signal,
      });

      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }

      const userData = await response.json();

      this.setState({
        username: userData.username,
        isLoading: false,
        lastUpdated: new Date(),
      });

      this.props.onUserLoad?.(userData.username);
    } catch (error) {
      if ((error as Error).name === "AbortError") {
        return;
      }

      this.setState({
        isLoading: false,
        error: (error as Error).message,
      });
    } finally {
      this.fetchController = null;
    }
  }

  private handleRefresh(): void {
    void this.fetchUserData();
  }
}
