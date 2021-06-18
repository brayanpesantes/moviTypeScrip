export const calcTime = (time: number) => {
  const hours = Math.floor(time / 60);
  const mins = time % 60;
  return `${hours}h ${mins}m`;
};

export const convertMoney = (money: number) => {
  const formatter = new Intl.NumberFormat("es-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });
  return formatter.format(money);
};

export const isPresistedState = (stateName: string) => {
  const sesionState = sessionStorage.getItem(`${stateName}`);
  return sesionState && JSON.parse(sesionState);
};
