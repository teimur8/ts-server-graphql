import { ResolverMap } from "./types/graphql-util";

export const resolvers: ResolverMap = {
  Query: {
    hello: (_, { name }: GQL.IHelloOnQueryArguments) =>
      `Hello ${name || "World"}`
  },
  Mutation: {
    register: (_, {  }: GQL.IRegisterOnMutationArguments) => {}
  }
};
