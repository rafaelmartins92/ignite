import { Route, Routes } from 'react-router-dom';

import { HomePage } from './pages/Home';
import { PostPage } from './pages/Post';
import { DefaultLayout } from './layouts/DefaultLayout';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/:id" element={<PostPage />} />
      </Route>
    </Routes>
  );
}
