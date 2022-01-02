export function getClasses(val) {
  const classList = [];

  if (val.flex_direction) {
    const classes = {
      col: 'flex-col',
      row: 'flex-row',
    }

    classList.push(classes[val.flex_direction]);
  }

  if (val.align_items) {
    const classes = {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
    }

    classList.push(classes[val.align_items]);
  }

  if (val.justify_content) {
    const classes = {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly',
    }

    classList.push(classes[val.justify_content]);
  }

  return classList.join(' ');
}