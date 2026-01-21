const changement_d_etat = (etat) => {
            return new Promise((resolve, reject) => {
                const State = {
                    IDLE: 'idle',
                    LOADING: 'loading',
                    SUCCESS: 'success',
                    ERROR: 'error'
                };
                if (!Object.values(State).includes(etat)) {
                    reject('État invalide fourni.');
                    return;
                } else {
                    setTimeout(() => {
                        if (etat === 'loading') {
                            resolve(`Changement d'état réussi à : ${etat}`);
                        } else {
                            reject('Erreur : État non réussi.');
                        }
                    }, 1000);
                }
            });
        };

        const gererChangementEtat = async (etat) => {
            const loader = document.getElementById('loader');
            const button = document.getElementById('loadingBtn');
            const messageDiv = document.getElementById('message');

            // Activer le loader et désactiver le bouton
            loader.style.display = 'block';
            button.disabled = true;
            messageDiv.innerHTML = ''; // Réinitialiser le message

            try {
                const resultat = await changement_d_etat(etat);
                messageDiv.innerHTML = resultat;
            } catch (erreur) {
                messageDiv.innerHTML = `Erreur : ${erreur}`;
            } finally {
                // Désactiver le loader et réactiver le bouton
                loader.style.display = 'none';
                button.disabled = false;
            }
        };

        // Événement pour le bouton
        document.getElementById('loadingBtn').addEventListener('click', () => {
            gererChangementEtat('loading');
        });