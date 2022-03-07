/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
    <article id="entry_card_container">
        <section id="entry--${entry.id}" class="journalEntry">
            <p>Concepts covered: ${entry.concept}</p>
            <p>${entry.date}</p>
            <p>${entry.entry}</p>
            <p>Mood: ${entry.mood}</p>
        </section>
    </article>
    `
}
