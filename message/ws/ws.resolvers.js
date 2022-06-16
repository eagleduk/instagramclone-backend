import { withFilter } from "graphql-subscriptions";
import { WSMESSAGE } from "../../constants";
import pubSub from "../../pubSub";

export default {
  Subscription: {
    wsMessage: {
      subscribe: () => pubSub.asyncIterator([WSMESSAGE]),
    },
  },
};
