export type Query = {
  select: string[];
  from: string[];
  where?: string[];
  joins?: string[];
  orderBy?: string[];
  groupBy?: string[];
};
