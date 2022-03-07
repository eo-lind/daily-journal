import { EntryListComponent } from "./JournalEntryList.js"

EntryListComponent()

// button

const recordEntryClicked = () => {
    console.log("Entry recorded!");
}

document.querySelector("#recordEntry").addEventListener("click", handleRecordEntryClicked);