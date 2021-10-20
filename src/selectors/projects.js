/**
 *  on trouve la recette voulue dans la liste des recettes
 * @param {Array} projects - tous les projets
 * @param {number} searchedId - l'id du projet recherché
 * @return {Object} - Le projet trouvé
 */
 export function findProject(projects, searchedId) {
    const project = projects.find((searchedProject) => {
      return searchedProject.id === searchedId;
    });
    return project;
}