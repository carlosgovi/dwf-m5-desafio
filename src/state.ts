const state = {
  //donde guardo los datos
  data: {
    player: 0,
    pc: 0,
  },
  // escuchador listeners
  listeners: [],
  ///  tomo los datos
  getState() {
    return this.data;
  },
  /// seteo los datos pisando los anteriores
  setState(newState) {
    this.data = newState;
    for (const cb of this.listeners) {
      cb();
    }
  },
  ///manejador del state
  subscribe(callbacks: (any) => { any }) {
    this.listeners.push(callbacks);
  },
};

export { state };
