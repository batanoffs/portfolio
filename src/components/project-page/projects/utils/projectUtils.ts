/**
 * Checks if a project is marked as coming soon based on its title.
 * Currently checks if the title includes 'Mila' as the indicator.
 * 
 * @param {string} title - The project title to check
 * @returns {boolean} True if the project is marked as coming soon
 */
export const isProjectComingSoon = (title: string): boolean => title.includes('Mila');
