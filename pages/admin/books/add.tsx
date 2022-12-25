import Flex from "../../../components/Flex";
import AdminLayout from "../../../layouts/AdminLayout";
import { NextPageWithLayout } from "../../../models/AppModel";

const AdminBookAddPage: NextPageWithLayout = () => {
  return (
    <Flex direction="column" justify="center" align="center">
      AdminBookAddPage
    </Flex>
  );
};

AdminBookAddPage.Layout = AdminLayout;

export default AdminBookAddPage;
