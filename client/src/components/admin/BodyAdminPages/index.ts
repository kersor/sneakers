import { IAdminPages } from "../../../types/types";
import BodyAdminPagesComment from "./BodyAdminPagesComment";
import  BodyAdminPagesUsers from "./BodyAdminPagesUsers";
import BodyAdminPagesProduct from "./BodyAdminPagesProduct";
import BodyAdminPagesBlog from "./BodyAdminPagesBlog";
import BodyAdminPagesProductColor from "./BodyAdminPagesProductColor";
import BodyAdminPagesProductGender from "./BodyAdminPagesProductGender";
import BodyAdminPagesProductBrands from "./BodyAdminPagesProductBrands";

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
      page: BodyAdminPagesProductColor
    },
    {
      id: 4,
      page: BodyAdminPagesProductGender
    },
    {
      id: 5,
      page: BodyAdminPagesProductBrands
    },
    {
      id: 6,
      page: BodyAdminPagesComment
    },
    {
      id: 7,
      page: BodyAdminPagesBlog
    }
];