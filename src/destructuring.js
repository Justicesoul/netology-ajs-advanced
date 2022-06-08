export default function dest(obj) {
  const { special } = obj;
  let arr = [];
  for (let i = 0; i < special.length; i += 1) {
    const { id, name, icon, description = 'Описание недоступно' } = special[i];
    arr.push({
      id,
      name,
      icon,
      description,
    });
  }
  return arr;
}
