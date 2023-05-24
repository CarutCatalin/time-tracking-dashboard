export interface Activities {
  title: string,
  timeframes: {
    daily: {
      current: number;
      previous: number;
    },
    weeekly: {
      current: number;
      previous: number;
    },
    monthly: {
      current: number;
      previous: number;
    }
  }
}
