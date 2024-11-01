/**
 * Toggles the display of an individual team member's bio
 * @param {string} bioId - The ID of the bio section to show or hide
 */
function toggleBio(bioId) {
    const bio = document.getElementById(bioId);
    // Toggle between showing and hiding the bio section
    if (bio.style.display === "none" || bio.style.display === "") {
        bio.style.display = "block";
    } else {
        bio.style.display = "none";
    }
}

/**
 * Shows the specified section ('bios' or 'vision') and hides the other
 * @param {string} sectionId - The ID of the section to display
 */
function showSection(sectionId) {
    const biosSection = document.getElementById("bios");
    const visionSection = document.getElementById("vision");

    // Display the bios section and hide the vision section
    if (sectionId === "bios") {
        biosSection.style.display = "flex";
        visionSection.style.display = "none";
    }
    // Display the vision section and hide the bios section
    else if (sectionId === "vision") {
        biosSection.style.display = "none";
        visionSection.style.display = "block";
    }
}

/**
 * Play a sound when your bio button is pressed and the bio opens
 * @param {string} audio - path to the sound file to be played
 * @param {string} bioId - the ID of the bio section to check
 **/
function playSound(audio, bioId) {
    const sound = document.getElementById("sound");
    const bio = document.getElementById(bioId);

    // Play sound only if the bio is currently hidden and is being unhidden
    if (bio && (bio.style.display === "block")) {
        if (sound) {
            // Set the source to the provided audio path
            sound.src = audio;
            // Play audio
            sound.play();
        } else {
            console.error("Audio not found.");
        }
    }
}

