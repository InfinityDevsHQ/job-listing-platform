// utils/dateUtils.ts

// Function to calculate the time difference between a given date string and the current time
export function calculateTimeDifference(dateString: string): string {
  // Convert the string to a Date object
  const givenDate = new Date(dateString);
  // Get the current date
  const currentDate = new Date();
  // Calculate the time difference in milliseconds
  const timeDifference = currentDate.getTime() - givenDate.getTime();

  // Convert milliseconds to seconds, minutes, hours, days, months, and years
  const secondsDifference = Math.floor(timeDifference / 1000);
  const minutesDifference = Math.floor(secondsDifference / 60);
  const hoursDifference = Math.floor(minutesDifference / 60);
  const daysDifference = Math.floor(hoursDifference / 24);
  const monthsDifference = Math.floor(daysDifference / 30);
  const yearsDifference = Math.floor(monthsDifference / 12);

  if (yearsDifference >= 1) {
    return yearsDifference === 1 ? '1 year ago' : `${yearsDifference} years ago`;
  } else if (monthsDifference >= 1) {
    return monthsDifference === 1 ? '1 month ago' : `${monthsDifference} months ago`;
  } else if (daysDifference >= 1) {
    return daysDifference === 1 ? '1 day ago' : `${daysDifference} days ago`;
  } else if (hoursDifference >= 1) {
    return hoursDifference === 1 ? '1 hour ago' : `${hoursDifference} hours ago`;
  } else if (minutesDifference >= 1) {
    return minutesDifference === 1 ? '1 minute ago' : `${minutesDifference} minutes ago`;
  } else {
    return secondsDifference < 5
      ? 'just now'
      : secondsDifference === 1
        ? '1 second ago'
        : `${secondsDifference} seconds ago`;
  }
}
