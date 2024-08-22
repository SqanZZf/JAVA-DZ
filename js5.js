export function calculateFallDistance(tFall) {
    return 0.5 * 9.88 * (tFall * tFall)
  }
  let res = (calculateFallDistance)(3)
  