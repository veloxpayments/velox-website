export function formatDateToLong(dateStr: string): string {
	const [day, month, year] = dateStr.split('/').map(Number);
	const date = new Date(year, month - 1, day);
	const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
	return date.toLocaleDateString('en-US', options);
}
