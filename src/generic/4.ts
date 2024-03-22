/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

class Component<T extends object> {
  constructor (public props: T) {

  }
}

interface Props {
  title: string;
}

class Page extends Component<Props> {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};