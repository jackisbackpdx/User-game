export const scoreHp = (hp) => {
    if (hp === 0) {
        return 'dead';
    } else if (hp < 60) {
        return 'bad health';
    } else {
        return 'healthy';
    }
};