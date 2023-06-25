import { IAdminPages } from "../../../types/types";
import BodyAdminPagesComment from "./BodyAdminPagesComment";
import  BodyAdminPagesUsers from "./BodyAdminPagesUsers";
import BodyAdminPagesProduct from "./BodyAdminPagesProduct";
import BodyAdminPagesBlog from "./BodyAdminPagesBlog";
import BodyAdminPagesProductColor from "./BodyAdminPagesProductColor";
import BodyAdminPagesProductGender from "./BodyAdminPagesProductGender";
import BodyAdminPagesProductBrands from "./BodyAdminPagesProductBrands";
import BodyAdminPagesUsersRoles from "./BodyAdminPagesUsersRoles";
import BodyAdminPagesProductSizes from "./BodyAdminPagesProductSizes";

export const pages: IAdminPages[] = [
    {
      id: 1,
      page: BodyAdminPagesUsers
    },
    {
      id: 2,
      page: BodyAdminPagesUsersRoles
    },
    {
      id: 3,
      page: BodyAdminPagesProduct
    },
    {
      id: 4,
      page: BodyAdminPagesProductColor
    },
    {
      id: 5,
      page: BodyAdminPagesProductGender
    },
    {
      id: 6,
      page: BodyAdminPagesProductBrands
    },
    {
      id: 7,
      page: BodyAdminPagesProductSizes
    },
    {
      id: 8,
      page: BodyAdminPagesComment
    },
    {
      id: 9,
      page: BodyAdminPagesBlog
    }
];