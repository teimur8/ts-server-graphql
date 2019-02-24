import { ResolverMap } from "./types/graphql-util";
import * as bcrypt from "bcryptjs";
import { User } from "./entity/User";

export const resolvers: ResolverMap = {
  Query: {
    hello: (_, { name }: GQL.IHelloOnQueryArguments) =>
      `Hello ${name || "World"}`
  },
  Mutation: {
    register: async (
      _,
      { email, password }: GQL.IRegisterOnMutationArguments
    ) => {
      let passwordHash = await bcrypt.hash(password, 10);

      await User.create({
        email,
        password: passwordHash
      }).save();

      return true;
    }
  }
};
