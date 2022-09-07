import { Loader } from '../../components/Loader';

import "./PageNotFound.scss";

export const PageNotFound = () => {
  return (
    <main className="page-not-found">
      <h2 className="title">Page Not Found 404...</h2>
      <Loader />
    </main>
  )
}
