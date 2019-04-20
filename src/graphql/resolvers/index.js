import {mergeResolvers} from "merge-graphql-schemas";
import User from "./user/";
import Game from "./game/"

const resolvers = [User, Game];

export default mergeResolvers(resolvers);
