function titleize(string) {

  const _capitalize = (str) => {

    if ( str ) {

      return str[0].toUpperCase() + str.slice(1);

    } else {

      return str;

    }
    
  }
  
  const _tilde = (str) => {

    return str.replace('~', '.');

  };

  const _hyphen = (str) => {

    const arr = str.split('-');

    return arr.map((a) => {
      return _capitalize(a);
    }).join(' ');

  }

  const _carrot = (str) => {

    const arr = str.split('^');

    return arr.map((a,i) => {
      if (i === 0) {

        return a;

      } else {

        return _capitalize(a);

      }
    }).join('');

  }

  const _underscore = (str) => {

    return str.replace('_', '');

  }

  const _star = (str) => {

    const arr = str.split('*');

    return `${_capitalize(arr[0])}${arr[1].toUpperCase()}`;

  }

  const _titleize = () => {

    let title = string;

    if (title.includes('~')) {

      // capitalize each initial
      title = _tilde(title);
      
    }

    if (title.includes('-')) {

      // capitalize each sub string
      title = _hyphen(title);

    }

    if (title.includes('^')) {

      // capitalize character following carrot
      title = _carrot(title);

    }

    if (title.includes('_')) {

      // remove underscore and do not capitalize
      title = _underscore(title);


    } else if (title.includes('*')) {

      // all caps
      title = _star(title);

    } else {

      // capitalize
      title = _capitalize(title);
      
    }

    return title;
  }

  // Titleize...
  return _titleize();
  
  
}

export default titleize;