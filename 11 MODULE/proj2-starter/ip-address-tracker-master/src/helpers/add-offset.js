export function addOffset (map) {

    const offsetY = map.getSize().y * 0.15;
    console.log(offsetY);

    map.panBy([0, -offsetY], {animate: true});
}