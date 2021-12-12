export function titleize(string) {

  const _hyphen = (str) => {

    return str.replace('-', ' ');

  }

  const _underscore = (str) => {

    return str.replace('_', '.');

  }

  const _capitalize = (str) => {

    return str[0].toUpperCase() + str.slice(1);

  }

  const _titleize = () => {

    let title = string;

    if (title.includes('-')) {

      // replace hyphen characters with a blank spaces
      title = _hyphen(title);

    }

    if (title.includes('_')) {

      // replace underscore characters with 
      title = _underscore(title);

    }

    if (!title.includes('~')) {
      title = _capitalize(title);
    }

    return title.replace('~', '');
  }

  // Titleize...
  return _titleize();
  
}


export function addClass(string, string2) {

  if (string && string2) {

    return `${string} ${string2}`;

  } else if (string) {

    return string;

  } else {

    return string2;
    
  }

}

export function addInputName(name, string) {
  if (name && string) {
    return `${name}.${string}`;
  } else if (name) {
    return name;
  } else {
    return string;
  }
}