import Flex from "../../../../components/Flex";
import AdminLayout from "../../../../layouts/AdminLayout";
import { NextPageWithLayout } from "../../../../models/AppModel";

const AdminBookPage: NextPageWithLayout = () => {
  return (
    <Flex direction="column" justify="center" align="center">
      AdminBookPage
    </Flex>
  );
};

AdminBookPage.Layout = AdminLayout;

export default AdminBookPage;
