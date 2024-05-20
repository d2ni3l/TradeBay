import AddtoCart from "./AddtoCart";

import getCurrentUser from "../actions/getCurrentUser";

export default async function Page() {
  const currentUser = await getCurrentUser();

  return (
    <div>
      <AddtoCart currentUser={currentUser} />
    </div>
  );
}
