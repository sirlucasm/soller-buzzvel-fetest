const routes = {
  public: {
    home: {
      root: "/",
    },
  },
  private: {},
};

type RouteObject = {
  [key: string]: string | ((...args: string[]) => string) | RouteObject;
};

function extractProtectedRoutes(routeObject: RouteObject): string[] {
  const protectedRoutes: string[] = [];

  function findRoutes(object: RouteObject) {
    for (const key in object) {
      if (typeof object[key] === "string") {
        protectedRoutes.push(object[key]);
      } else if (typeof object[key] === "object") {
        findRoutes(object[key]);
      }
    }
  }

  findRoutes(routeObject);
  return protectedRoutes;
}

export const protectedRoutesList = extractProtectedRoutes(routes.private);

type RoutesProps = typeof routes;

export default routes;
export type { RoutesProps };
