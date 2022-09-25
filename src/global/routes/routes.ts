type Route = (...args: any[]) => string;
type GenericRoutes = { [k in string]: Route };

export const Routes: GenericRoutes = {
  HOME: () => '/',
  CONFIG: () => '/config',
};
