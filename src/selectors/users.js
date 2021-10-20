/**
 * @param {Array} users - tous les users
 * @param {number} searchedId - l'id du user recherché
 * @return {Object} - Le user trouvé
 */

 export function findUser(users, searchedId) {
    const user = users.find((searchedUser) => {
      return searchedUser.id === searchedId;
    });
    return user;
}