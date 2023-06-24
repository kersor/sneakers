import { IAdminPages } from "../../../types/types";
import BodyAdminPagesComment from "./BodyAdminPagesComment";
import  BodyAdminPagesUsers from "./BodyAdminPagesUsers";
import BodyAdminPagesProduct from "./BodyAdminPagesProduct";
import BodyAdminPagesBlog from "./BodyAdminPagesBlog";

export const pages: IAdminPages[] = [
    {
      id: 1,
      page: BodyAdminPagesUsers
    },
    {
      id: 2,
      page: BodyAdminPagesProduct
    },
    {
      id: 3,
      page: BodyAdminPagesComment
    },
    {
      id: 4,
      page: BodyAdminPagesBlog
    }
];