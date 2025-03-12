/* Acceder a la api, nos devuelve un objeto {}
Dentro del objeto hay que acceder a el atributo rounds que es un array []
Dentro del array, hay que acceder al índice de la ronda buscada (0 final, 1 semi1, 2 semi2), cada ronda es un objeto {}
Dentro de la ronda específica, hay que acceder a performances, que es un array []
Dentro del array de performance, hay que acceder al índice que representa a la posición del país - 1 (id).
Ahora accedemos a scores, a 0 y luego a points. (total de puntos)
*/

export const getRoundInfo = (rounds: any[], contestantId: number) => {
    if (!rounds || rounds?.length === 0) {
        return null;
    }
    let performanceIndex = 0;
    const round = rounds?.find((ronda) => {
        const roundSearched = ronda.performances.findIndex((performance) => performance.contestantId === contestantId)
        if (roundSearched !== -1) {
            performanceIndex = roundSearched;
            return true;
        }
        return false;
    });
    const totalPoints = round?.performances[performanceIndex]?.scores[0]?.points;
    const isDisqualified = round.disqualifieds ? round.disqualifieds.some((disq) => disq === contestantId)  : false;
    return {totalPoints, roundName: round?.name, isDisqualified};
}
