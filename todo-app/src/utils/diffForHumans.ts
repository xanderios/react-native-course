enum TimeUnit {
  Second = 1,
  Minute = 60,
  Hour = 3600,
  Day = 86400,
  Week = 604800,
  Month = 2592000,
  Year = 31536000,
}

export default function diffForHumans(
  date: Date,
  now: Date = new Date()
): string {
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  const future = seconds < 0;
  const secondsAbs = Math.abs(seconds);

  if (secondsAbs < TimeUnit.Minute) {
    return future ? "in a few seconds" : "a few seconds ago";
  }

  if (secondsAbs < TimeUnit.Hour) {
    const minutes = Math.floor(secondsAbs / TimeUnit.Minute);
    return future
      ? `in ${minutes} ${pluralize("minute", minutes)}`
      : `${minutes} ${pluralize("minute", minutes)} ago`;
  }

  if (secondsAbs < TimeUnit.Day) {
    const hours = Math.floor(secondsAbs / TimeUnit.Hour);
    return future
      ? `in ${hours} ${pluralize("hour", hours)}`
      : `${hours} ${pluralize("hour", hours)} ago`;
  }

  if (secondsAbs < TimeUnit.Week) {
    const days = Math.floor(secondsAbs / TimeUnit.Day);
    return future
      ? `in ${days} ${pluralize("day", days)}`
      : `${days} ${pluralize("day", days)} ago`;
  }

  if (secondsAbs < TimeUnit.Month) {
    const weeks = Math.floor(secondsAbs / TimeUnit.Week);
    return future
      ? `in ${weeks} ${pluralize("week", weeks)}`
      : `${weeks} ${pluralize("week", weeks)} ago`;
  }

  if (secondsAbs < TimeUnit.Year) {
    const months = Math.floor(secondsAbs / TimeUnit.Month);
    return future
      ? `in ${months} ${pluralize("month", months)}`
      : `${months} ${pluralize("month", months)} ago`;
  }

  const years = Math.floor(secondsAbs / TimeUnit.Year);
  return future
    ? `in ${years} ${pluralize("year", years)}`
    : `${years} ${pluralize("year", years)} ago`;
}

function pluralize(unit: string, count: number): string {
  return count === 1 ? unit : `${unit}s`;
}
