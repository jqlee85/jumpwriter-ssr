import App from './components/App/App';
import About from './components/About/About';
import Write from './components/Write/Write';

const routes = [
  { component: App,
    routes: [
      { path: '/',
        exact: true,
        component: Write
      },
      { path: '/about',
        component: About
      },
      { path: '/write',
        component: Write
      }
    ]
  }
];

export default routes;
