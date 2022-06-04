export const encodeQueryParams = <T>(params: T): string => {
  const queryParams = Object.entries(params).reduce(
    (acc: string[], [key, value]) => {
      acc.push(encodeURIComponent(key) + "=" + encodeURIComponent(value));
      return acc;
    },
    []
  );

  return queryParams.length ? "?" + queryParams.join("&") : "";
};
