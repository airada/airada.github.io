(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    0: function (t, e, n) {
      t.exports = n("zUnb");
    },
    zUnb: function (t, e, n) {
      "use strict";
      function r(t) {
        return "function" == typeof t;
      }
      n.r(e);
      let s = !1;
      const i = {
        Promise: void 0,
        set useDeprecatedSynchronousErrorHandling(t) {
          if (t) {
            const t = new Error();
            console.warn(
              "DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" +
                t.stack
            );
          } else
            s &&
              console.log(
                "RxJS: Back to a better error behavior. Thank you. <3"
              );
          s = t;
        },
        get useDeprecatedSynchronousErrorHandling() {
          return s;
        },
      };
      function o(t) {
        setTimeout(() => {
          throw t;
        }, 0);
      }
      const a = {
          closed: !0,
          next(t) {},
          error(t) {
            if (i.useDeprecatedSynchronousErrorHandling) throw t;
            o(t);
          },
          complete() {},
        },
        l = (() =>
          Array.isArray || ((t) => t && "number" == typeof t.length))();
      function c(t) {
        return null !== t && "object" == typeof t;
      }
      const u = (() => {
        function t(t) {
          return (
            Error.call(this),
            (this.message = t
              ? `${t.length} errors occurred during unsubscription:\n${t
                  .map((t, e) => `${e + 1}) ${t.toString()}`)
                  .join("\n  ")}`
              : ""),
            (this.name = "UnsubscriptionError"),
            (this.errors = t),
            this
          );
        }
        return (t.prototype = Object.create(Error.prototype)), t;
      })();
      let h = (() => {
        class t {
          constructor(t) {
            (this.closed = !1),
              (this._parentOrParents = null),
              (this._subscriptions = null),
              t && ((this._ctorUnsubscribe = !0), (this._unsubscribe = t));
          }
          unsubscribe() {
            let e;
            if (this.closed) return;
            let {
              _parentOrParents: n,
              _ctorUnsubscribe: s,
              _unsubscribe: i,
              _subscriptions: o,
            } = this;
            if (
              ((this.closed = !0),
              (this._parentOrParents = null),
              (this._subscriptions = null),
              n instanceof t)
            )
              n.remove(this);
            else if (null !== n)
              for (let t = 0; t < n.length; ++t) n[t].remove(this);
            if (r(i)) {
              s && (this._unsubscribe = void 0);
              try {
                i.call(this);
              } catch (a) {
                e = a instanceof u ? d(a.errors) : [a];
              }
            }
            if (l(o)) {
              let t = -1,
                n = o.length;
              for (; ++t < n; ) {
                const n = o[t];
                if (c(n))
                  try {
                    n.unsubscribe();
                  } catch (a) {
                    (e = e || []),
                      a instanceof u ? (e = e.concat(d(a.errors))) : e.push(a);
                  }
              }
            }
            if (e) throw new u(e);
          }
          add(e) {
            let n = e;
            if (!e) return t.EMPTY;
            switch (typeof e) {
              case "function":
                n = new t(e);
              case "object":
                if (
                  n === this ||
                  n.closed ||
                  "function" != typeof n.unsubscribe
                )
                  return n;
                if (this.closed) return n.unsubscribe(), n;
                if (!(n instanceof t)) {
                  const e = n;
                  (n = new t()), (n._subscriptions = [e]);
                }
                break;
              default:
                throw new Error(
                  "unrecognized teardown " + e + " added to Subscription."
                );
            }
            let { _parentOrParents: r } = n;
            if (null === r) n._parentOrParents = this;
            else if (r instanceof t) {
              if (r === this) return n;
              n._parentOrParents = [r, this];
            } else {
              if (-1 !== r.indexOf(this)) return n;
              r.push(this);
            }
            const s = this._subscriptions;
            return null === s ? (this._subscriptions = [n]) : s.push(n), n;
          }
          remove(t) {
            const e = this._subscriptions;
            if (e) {
              const n = e.indexOf(t);
              -1 !== n && e.splice(n, 1);
            }
          }
        }
        return (
          (t.EMPTY = (function (t) {
            return (t.closed = !0), t;
          })(new t())),
          t
        );
      })();
      function d(t) {
        return t.reduce((t, e) => t.concat(e instanceof u ? e.errors : e), []);
      }
      const p = (() =>
        "function" == typeof Symbol
          ? Symbol("rxSubscriber")
          : "@@rxSubscriber_" + Math.random())();
      class f extends h {
        constructor(t, e, n) {
          switch (
            (super(),
            (this.syncErrorValue = null),
            (this.syncErrorThrown = !1),
            (this.syncErrorThrowable = !1),
            (this.isStopped = !1),
            arguments.length)
          ) {
            case 0:
              this.destination = a;
              break;
            case 1:
              if (!t) {
                this.destination = a;
                break;
              }
              if ("object" == typeof t) {
                t instanceof f
                  ? ((this.syncErrorThrowable = t.syncErrorThrowable),
                    (this.destination = t),
                    t.add(this))
                  : ((this.syncErrorThrowable = !0),
                    (this.destination = new g(this, t)));
                break;
              }
            default:
              (this.syncErrorThrowable = !0),
                (this.destination = new g(this, t, e, n));
          }
        }
        [p]() {
          return this;
        }
        static create(t, e, n) {
          const r = new f(t, e, n);
          return (r.syncErrorThrowable = !1), r;
        }
        next(t) {
          this.isStopped || this._next(t);
        }
        error(t) {
          this.isStopped || ((this.isStopped = !0), this._error(t));
        }
        complete() {
          this.isStopped || ((this.isStopped = !0), this._complete());
        }
        unsubscribe() {
          this.closed || ((this.isStopped = !0), super.unsubscribe());
        }
        _next(t) {
          this.destination.next(t);
        }
        _error(t) {
          this.destination.error(t), this.unsubscribe();
        }
        _complete() {
          this.destination.complete(), this.unsubscribe();
        }
        _unsubscribeAndRecycle() {
          const { _parentOrParents: t } = this;
          return (
            (this._parentOrParents = null),
            this.unsubscribe(),
            (this.closed = !1),
            (this.isStopped = !1),
            (this._parentOrParents = t),
            this
          );
        }
      }
      class g extends f {
        constructor(t, e, n, s) {
          let i;
          super(), (this._parentSubscriber = t);
          let o = this;
          r(e)
            ? (i = e)
            : e &&
              ((i = e.next),
              (n = e.error),
              (s = e.complete),
              e !== a &&
                ((o = Object.create(e)),
                r(o.unsubscribe) && this.add(o.unsubscribe.bind(o)),
                (o.unsubscribe = this.unsubscribe.bind(this)))),
            (this._context = o),
            (this._next = i),
            (this._error = n),
            (this._complete = s);
        }
        next(t) {
          if (!this.isStopped && this._next) {
            const { _parentSubscriber: e } = this;
            i.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable
              ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe()
              : this.__tryOrUnsub(this._next, t);
          }
        }
        error(t) {
          if (!this.isStopped) {
            const { _parentSubscriber: e } = this,
              { useDeprecatedSynchronousErrorHandling: n } = i;
            if (this._error)
              n && e.syncErrorThrowable
                ? (this.__tryOrSetError(e, this._error, t), this.unsubscribe())
                : (this.__tryOrUnsub(this._error, t), this.unsubscribe());
            else if (e.syncErrorThrowable)
              n ? ((e.syncErrorValue = t), (e.syncErrorThrown = !0)) : o(t),
                this.unsubscribe();
            else {
              if ((this.unsubscribe(), n)) throw t;
              o(t);
            }
          }
        }
        complete() {
          if (!this.isStopped) {
            const { _parentSubscriber: t } = this;
            if (this._complete) {
              const e = () => this._complete.call(this._context);
              i.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable
                ? (this.__tryOrSetError(t, e), this.unsubscribe())
                : (this.__tryOrUnsub(e), this.unsubscribe());
            } else this.unsubscribe();
          }
        }
        __tryOrUnsub(t, e) {
          try {
            t.call(this._context, e);
          } catch (n) {
            if ((this.unsubscribe(), i.useDeprecatedSynchronousErrorHandling))
              throw n;
            o(n);
          }
        }
        __tryOrSetError(t, e, n) {
          if (!i.useDeprecatedSynchronousErrorHandling)
            throw new Error("bad call");
          try {
            e.call(this._context, n);
          } catch (r) {
            return i.useDeprecatedSynchronousErrorHandling
              ? ((t.syncErrorValue = r), (t.syncErrorThrown = !0), !0)
              : (o(r), !0);
          }
          return !1;
        }
        _unsubscribe() {
          const { _parentSubscriber: t } = this;
          (this._context = null),
            (this._parentSubscriber = null),
            t.unsubscribe();
        }
      }
      const m = (() =>
        ("function" == typeof Symbol && Symbol.observable) || "@@observable")();
      function v(t) {
        return t;
      }
      let y = (() => {
        class t {
          constructor(t) {
            (this._isScalar = !1), t && (this._subscribe = t);
          }
          lift(e) {
            const n = new t();
            return (n.source = this), (n.operator = e), n;
          }
          subscribe(t, e, n) {
            const { operator: r } = this,
              s = (function (t, e, n) {
                if (t) {
                  if (t instanceof f) return t;
                  if (t[p]) return t[p]();
                }
                return t || e || n ? new f(t, e, n) : new f(a);
              })(t, e, n);
            if (
              (s.add(
                r
                  ? r.call(s, this.source)
                  : this.source ||
                    (i.useDeprecatedSynchronousErrorHandling &&
                      !s.syncErrorThrowable)
                  ? this._subscribe(s)
                  : this._trySubscribe(s)
              ),
              i.useDeprecatedSynchronousErrorHandling &&
                s.syncErrorThrowable &&
                ((s.syncErrorThrowable = !1), s.syncErrorThrown))
            )
              throw s.syncErrorValue;
            return s;
          }
          _trySubscribe(t) {
            try {
              return this._subscribe(t);
            } catch (e) {
              i.useDeprecatedSynchronousErrorHandling &&
                ((t.syncErrorThrown = !0), (t.syncErrorValue = e)),
                (function (t) {
                  for (; t; ) {
                    const { closed: e, destination: n, isStopped: r } = t;
                    if (e || r) return !1;
                    t = n && n instanceof f ? n : null;
                  }
                  return !0;
                })(t)
                  ? t.error(e)
                  : console.warn(e);
            }
          }
          forEach(t, e) {
            return new (e = _(e))((e, n) => {
              let r;
              r = this.subscribe(
                (e) => {
                  try {
                    t(e);
                  } catch (s) {
                    n(s), r && r.unsubscribe();
                  }
                },
                n,
                e
              );
            });
          }
          _subscribe(t) {
            const { source: e } = this;
            return e && e.subscribe(t);
          }
          [m]() {
            return this;
          }
          pipe(...t) {
            return 0 === t.length
              ? this
              : (0 === (e = t).length
                  ? v
                  : 1 === e.length
                  ? e[0]
                  : function (t) {
                      return e.reduce((t, e) => e(t), t);
                    })(this);
            var e;
          }
          toPromise(t) {
            return new (t = _(t))((t, e) => {
              let n;
              this.subscribe(
                (t) => (n = t),
                (t) => e(t),
                () => t(n)
              );
            });
          }
        }
        return (t.create = (e) => new t(e)), t;
      })();
      function _(t) {
        if ((t || (t = i.Promise || Promise), !t))
          throw new Error("no Promise impl found");
        return t;
      }
      const b = (() => {
        function t() {
          return (
            Error.call(this),
            (this.message = "object unsubscribed"),
            (this.name = "ObjectUnsubscribedError"),
            this
          );
        }
        return (t.prototype = Object.create(Error.prototype)), t;
      })();
      class w extends h {
        constructor(t, e) {
          super(),
            (this.subject = t),
            (this.subscriber = e),
            (this.closed = !1);
        }
        unsubscribe() {
          if (this.closed) return;
          this.closed = !0;
          const t = this.subject,
            e = t.observers;
          if (
            ((this.subject = null),
            !e || 0 === e.length || t.isStopped || t.closed)
          )
            return;
          const n = e.indexOf(this.subscriber);
          -1 !== n && e.splice(n, 1);
        }
      }
      class x extends f {
        constructor(t) {
          super(t), (this.destination = t);
        }
      }
      let C = (() => {
        class t extends y {
          constructor() {
            super(),
              (this.observers = []),
              (this.closed = !1),
              (this.isStopped = !1),
              (this.hasError = !1),
              (this.thrownError = null);
          }
          [p]() {
            return new x(this);
          }
          lift(t) {
            const e = new S(this, this);
            return (e.operator = t), e;
          }
          next(t) {
            if (this.closed) throw new b();
            if (!this.isStopped) {
              const { observers: e } = this,
                n = e.length,
                r = e.slice();
              for (let s = 0; s < n; s++) r[s].next(t);
            }
          }
          error(t) {
            if (this.closed) throw new b();
            (this.hasError = !0), (this.thrownError = t), (this.isStopped = !0);
            const { observers: e } = this,
              n = e.length,
              r = e.slice();
            for (let s = 0; s < n; s++) r[s].error(t);
            this.observers.length = 0;
          }
          complete() {
            if (this.closed) throw new b();
            this.isStopped = !0;
            const { observers: t } = this,
              e = t.length,
              n = t.slice();
            for (let r = 0; r < e; r++) n[r].complete();
            this.observers.length = 0;
          }
          unsubscribe() {
            (this.isStopped = !0), (this.closed = !0), (this.observers = null);
          }
          _trySubscribe(t) {
            if (this.closed) throw new b();
            return super._trySubscribe(t);
          }
          _subscribe(t) {
            if (this.closed) throw new b();
            return this.hasError
              ? (t.error(this.thrownError), h.EMPTY)
              : this.isStopped
              ? (t.complete(), h.EMPTY)
              : (this.observers.push(t), new w(this, t));
          }
          asObservable() {
            const t = new y();
            return (t.source = this), t;
          }
        }
        return (t.create = (t, e) => new S(t, e)), t;
      })();
      class S extends C {
        constructor(t, e) {
          super(), (this.destination = t), (this.source = e);
        }
        next(t) {
          const { destination: e } = this;
          e && e.next && e.next(t);
        }
        error(t) {
          const { destination: e } = this;
          e && e.error && this.destination.error(t);
        }
        complete() {
          const { destination: t } = this;
          t && t.complete && this.destination.complete();
        }
        _subscribe(t) {
          const { source: e } = this;
          return e ? this.source.subscribe(t) : h.EMPTY;
        }
      }
      function k(t) {
        return t && "function" == typeof t.schedule;
      }
      function E(t, e) {
        return function (n) {
          if ("function" != typeof t)
            throw new TypeError(
              "argument is not a function. Are you looking for `mapTo()`?"
            );
          return n.lift(new T(t, e));
        };
      }
      class T {
        constructor(t, e) {
          (this.project = t), (this.thisArg = e);
        }
        call(t, e) {
          return e.subscribe(new A(t, this.project, this.thisArg));
        }
      }
      class A extends f {
        constructor(t, e, n) {
          super(t),
            (this.project = e),
            (this.count = 0),
            (this.thisArg = n || this);
        }
        _next(t) {
          let e;
          try {
            e = this.project.call(this.thisArg, t, this.count++);
          } catch (n) {
            return void this.destination.error(n);
          }
          this.destination.next(e);
        }
      }
      const O = (t) => (e) => {
        for (let n = 0, r = t.length; n < r && !e.closed; n++) e.next(t[n]);
        e.complete();
      };
      function I() {
        return "function" == typeof Symbol && Symbol.iterator
          ? Symbol.iterator
          : "@@iterator";
      }
      const R = I(),
        P = (t) => t && "number" == typeof t.length && "function" != typeof t;
      function j(t) {
        return (
          !!t && "function" != typeof t.subscribe && "function" == typeof t.then
        );
      }
      const N = (t) => {
        if (t && "function" == typeof t[m])
          return (
            (r = t),
            (t) => {
              const e = r[m]();
              if ("function" != typeof e.subscribe)
                throw new TypeError(
                  "Provided object does not correctly implement Symbol.observable"
                );
              return e.subscribe(t);
            }
          );
        if (P(t)) return O(t);
        if (j(t))
          return (
            (n = t),
            (t) => (
              n
                .then(
                  (e) => {
                    t.closed || (t.next(e), t.complete());
                  },
                  (e) => t.error(e)
                )
                .then(null, o),
              t
            )
          );
        if (t && "function" == typeof t[R])
          return (
            (e = t),
            (t) => {
              const n = e[R]();
              for (;;) {
                let e;
                try {
                  e = n.next();
                } catch (r) {
                  return t.error(r), t;
                }
                if (e.done) {
                  t.complete();
                  break;
                }
                if ((t.next(e.value), t.closed)) break;
              }
              return (
                "function" == typeof n.return &&
                  t.add(() => {
                    n.return && n.return();
                  }),
                t
              );
            }
          );
        {
          const e = c(t) ? "an invalid object" : `'${t}'`;
          throw new TypeError(
            `You provided ${e} where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.`
          );
        }
        var e, n, r;
      };
      function M(t, e) {
        return new y((n) => {
          const r = new h();
          let s = 0;
          return (
            r.add(
              e.schedule(function () {
                s !== t.length
                  ? (n.next(t[s++]), n.closed || r.add(this.schedule()))
                  : n.complete();
              })
            ),
            r
          );
        });
      }
      function U(t, e) {
        return e
          ? (function (t, e) {
              if (null != t) {
                if (
                  (function (t) {
                    return t && "function" == typeof t[m];
                  })(t)
                )
                  return (function (t, e) {
                    return new y((n) => {
                      const r = new h();
                      return (
                        r.add(
                          e.schedule(() => {
                            const s = t[m]();
                            r.add(
                              s.subscribe({
                                next(t) {
                                  r.add(e.schedule(() => n.next(t)));
                                },
                                error(t) {
                                  r.add(e.schedule(() => n.error(t)));
                                },
                                complete() {
                                  r.add(e.schedule(() => n.complete()));
                                },
                              })
                            );
                          })
                        ),
                        r
                      );
                    });
                  })(t, e);
                if (j(t))
                  return (function (t, e) {
                    return new y((n) => {
                      const r = new h();
                      return (
                        r.add(
                          e.schedule(() =>
                            t.then(
                              (t) => {
                                r.add(
                                  e.schedule(() => {
                                    n.next(t),
                                      r.add(e.schedule(() => n.complete()));
                                  })
                                );
                              },
                              (t) => {
                                r.add(e.schedule(() => n.error(t)));
                              }
                            )
                          )
                        ),
                        r
                      );
                    });
                  })(t, e);
                if (P(t)) return M(t, e);
                if (
                  (function (t) {
                    return t && "function" == typeof t[R];
                  })(t) ||
                  "string" == typeof t
                )
                  return (function (t, e) {
                    if (!t) throw new Error("Iterable cannot be null");
                    return new y((n) => {
                      const r = new h();
                      let s;
                      return (
                        r.add(() => {
                          s && "function" == typeof s.return && s.return();
                        }),
                        r.add(
                          e.schedule(() => {
                            (s = t[R]()),
                              r.add(
                                e.schedule(function () {
                                  if (n.closed) return;
                                  let t, e;
                                  try {
                                    const n = s.next();
                                    (t = n.value), (e = n.done);
                                  } catch (r) {
                                    return void n.error(r);
                                  }
                                  e
                                    ? n.complete()
                                    : (n.next(t), this.schedule());
                                })
                              );
                          })
                        ),
                        r
                      );
                    });
                  })(t, e);
              }
              throw new TypeError(
                ((null !== t && typeof t) || t) + " is not observable"
              );
            })(t, e)
          : t instanceof y
          ? t
          : new y(N(t));
      }
      class D extends f {
        constructor(t) {
          super(), (this.parent = t);
        }
        _next(t) {
          this.parent.notifyNext(t);
        }
        _error(t) {
          this.parent.notifyError(t), this.unsubscribe();
        }
        _complete() {
          this.parent.notifyComplete(), this.unsubscribe();
        }
      }
      class L extends f {
        notifyNext(t) {
          this.destination.next(t);
        }
        notifyError(t) {
          this.destination.error(t);
        }
        notifyComplete() {
          this.destination.complete();
        }
      }
      function F(t, e) {
        if (!e.closed) return t instanceof y ? t.subscribe(e) : N(t)(e);
      }
      function H(t, e, n = Number.POSITIVE_INFINITY) {
        return "function" == typeof e
          ? (r) =>
              r.pipe(
                H((n, r) => U(t(n, r)).pipe(E((t, s) => e(n, t, r, s))), n)
              )
          : ("number" == typeof e && (n = e), (e) => e.lift(new V(t, n)));
      }
      class V {
        constructor(t, e = Number.POSITIVE_INFINITY) {
          (this.project = t), (this.concurrent = e);
        }
        call(t, e) {
          return e.subscribe(new $(t, this.project, this.concurrent));
        }
      }
      class $ extends L {
        constructor(t, e, n = Number.POSITIVE_INFINITY) {
          super(t),
            (this.project = e),
            (this.concurrent = n),
            (this.hasCompleted = !1),
            (this.buffer = []),
            (this.active = 0),
            (this.index = 0);
        }
        _next(t) {
          this.active < this.concurrent
            ? this._tryNext(t)
            : this.buffer.push(t);
        }
        _tryNext(t) {
          let e;
          const n = this.index++;
          try {
            e = this.project(t, n);
          } catch (r) {
            return void this.destination.error(r);
          }
          this.active++, this._innerSub(e);
        }
        _innerSub(t) {
          const e = new D(this),
            n = this.destination;
          n.add(e);
          const r = F(t, e);
          r !== e && n.add(r);
        }
        _complete() {
          (this.hasCompleted = !0),
            0 === this.active &&
              0 === this.buffer.length &&
              this.destination.complete(),
            this.unsubscribe();
        }
        notifyNext(t) {
          this.destination.next(t);
        }
        notifyComplete() {
          const t = this.buffer;
          this.active--,
            t.length > 0
              ? this._next(t.shift())
              : 0 === this.active &&
                this.hasCompleted &&
                this.destination.complete();
        }
      }
      function q(t = Number.POSITIVE_INFINITY) {
        return H(v, t);
      }
      function z(t, e) {
        return e ? M(t, e) : new y(O(t));
      }
      function B() {
        return function (t) {
          return t.lift(new W(t));
        };
      }
      class W {
        constructor(t) {
          this.connectable = t;
        }
        call(t, e) {
          const { connectable: n } = this;
          n._refCount++;
          const r = new G(t, n),
            s = e.subscribe(r);
          return r.closed || (r.connection = n.connect()), s;
        }
      }
      class G extends f {
        constructor(t, e) {
          super(t), (this.connectable = e);
        }
        _unsubscribe() {
          const { connectable: t } = this;
          if (!t) return void (this.connection = null);
          this.connectable = null;
          const e = t._refCount;
          if (e <= 0) return void (this.connection = null);
          if (((t._refCount = e - 1), e > 1))
            return void (this.connection = null);
          const { connection: n } = this,
            r = t._connection;
          (this.connection = null), !r || (n && r !== n) || r.unsubscribe();
        }
      }
      class Z extends y {
        constructor(t, e) {
          super(),
            (this.source = t),
            (this.subjectFactory = e),
            (this._refCount = 0),
            (this._isComplete = !1);
        }
        _subscribe(t) {
          return this.getSubject().subscribe(t);
        }
        getSubject() {
          const t = this._subject;
          return (
            (t && !t.isStopped) || (this._subject = this.subjectFactory()),
            this._subject
          );
        }
        connect() {
          let t = this._connection;
          return (
            t ||
              ((this._isComplete = !1),
              (t = this._connection = new h()),
              t.add(this.source.subscribe(new J(this.getSubject(), this))),
              t.closed && ((this._connection = null), (t = h.EMPTY))),
            t
          );
        }
        refCount() {
          return B()(this);
        }
      }
      const Q = (() => {
        const t = Z.prototype;
        return {
          operator: { value: null },
          _refCount: { value: 0, writable: !0 },
          _subject: { value: null, writable: !0 },
          _connection: { value: null, writable: !0 },
          _subscribe: { value: t._subscribe },
          _isComplete: { value: t._isComplete, writable: !0 },
          getSubject: { value: t.getSubject },
          connect: { value: t.connect },
          refCount: { value: t.refCount },
        };
      })();
      class J extends x {
        constructor(t, e) {
          super(t), (this.connectable = e);
        }
        _error(t) {
          this._unsubscribe(), super._error(t);
        }
        _complete() {
          (this.connectable._isComplete = !0),
            this._unsubscribe(),
            super._complete();
        }
        _unsubscribe() {
          const t = this.connectable;
          if (t) {
            this.connectable = null;
            const e = t._connection;
            (t._refCount = 0),
              (t._subject = null),
              (t._connection = null),
              e && e.unsubscribe();
          }
        }
      }
      function Y() {
        return new C();
      }
      function K(t) {
        return { toString: t }.toString();
      }
      function X(t, e, n) {
        return K(() => {
          const r = (function (t) {
            return function (...e) {
              if (t) {
                const n = t(...e);
                for (const t in n) this[t] = n[t];
              }
            };
          })(e);
          function s(...t) {
            if (this instanceof s) return r.apply(this, t), this;
            const e = new s(...t);
            return (n.annotation = e), n;
            function n(t, n, r) {
              const s = t.hasOwnProperty("__parameters__")
                ? t.__parameters__
                : Object.defineProperty(t, "__parameters__", { value: [] })
                    .__parameters__;
              for (; s.length <= r; ) s.push(null);
              return (s[r] = s[r] || []).push(e), t;
            }
          }
          return (
            n && (s.prototype = Object.create(n.prototype)),
            (s.prototype.ngMetadataName = t),
            (s.annotationCls = s),
            s
          );
        });
      }
      const tt = X("Inject", (t) => ({ token: t })),
        et = X("Optional"),
        nt = X("Self"),
        rt = X("SkipSelf");
      function st(t) {
        if ("string" == typeof t) return t;
        if (Array.isArray(t)) return "[" + t.map(st).join(", ") + "]";
        if (null == t) return "" + t;
        if (t.overriddenName) return "" + t.overriddenName;
        if (t.name) return "" + t.name;
        const e = t.toString();
        if (null == e) return "" + e;
        const n = e.indexOf("\n");
        return -1 === n ? e : e.substring(0, n);
      }
      function it(t, e) {
        return null == t || "" === t
          ? null === e
            ? ""
            : e
          : null == e || "" === e
          ? t
          : t + " " + e;
      }
      function ot(t) {
        for (let e in t) if (t[e] === ot) return e;
        throw Error("Could not find renamed property on target object.");
      }
      function at(t) {
        return {
          token: t.token,
          providedIn: t.providedIn || null,
          factory: t.factory,
          value: void 0,
        };
      }
      function lt(t) {
        return {
          factory: t.factory,
          providers: t.providers || [],
          imports: t.imports || [],
        };
      }
      function ct(t) {
        return ut(t, dt) || ut(t, ft);
      }
      function ut(t, e) {
        return t.hasOwnProperty(e) ? t[e] : null;
      }
      function ht(t) {
        return t && (t.hasOwnProperty(pt) || t.hasOwnProperty(gt))
          ? t[pt]
          : null;
      }
      const dt = ot({ ɵprov: ot }),
        pt = ot({ ɵinj: ot }),
        ft = ot({ ngInjectableDef: ot }),
        gt = ot({ ngInjectorDef: ot });
      class mt {
        constructor(t, e) {
          (this._desc = t),
            (this.ngMetadataName = "InjectionToken"),
            (this.ɵprov = void 0),
            "number" == typeof e
              ? (this.__NG_ELEMENT_ID__ = e)
              : void 0 !== e &&
                (this.ɵprov = at({
                  token: this,
                  providedIn: e.providedIn || "root",
                  factory: e.factory,
                }));
        }
        toString() {
          return "InjectionToken " + this._desc;
        }
      }
      const vt = new mt("AnalyzeForEntryComponents");
      var yt = (function (t) {
        return (
          (t[(t.OnPush = 0)] = "OnPush"), (t[(t.Default = 1)] = "Default"), t
        );
      })({});
      const _t = "undefined" != typeof globalThis && globalThis,
        bt = "undefined" != typeof window && window,
        wt =
          "undefined" != typeof self &&
          "undefined" != typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          self,
        xt = "undefined" != typeof global && global,
        Ct = _t || xt || bt || wt,
        St = ot({ __forward_ref__: ot });
      function kt(t) {
        return (
          (t.__forward_ref__ = kt),
          (t.toString = function () {
            return st(this());
          }),
          t
        );
      }
      function Et(t) {
        return "function" == typeof (e = t) &&
          e.hasOwnProperty(St) &&
          e.__forward_ref__ === kt
          ? t()
          : t;
        var e;
      }
      const Tt = Function;
      function At(t, e) {
        void 0 === e && (e = t);
        for (let n = 0; n < t.length; n++) {
          let r = t[n];
          Array.isArray(r)
            ? (e === t && (e = t.slice(0, n)), At(r, e))
            : e !== t && e.push(r);
        }
        return e;
      }
      function Ot(t, e) {
        t.forEach((t) => (Array.isArray(t) ? Ot(t, e) : e(t)));
      }
      function It(t, e, n) {
        e >= t.length ? t.push(n) : t.splice(e, 0, n);
      }
      function Rt(t, e) {
        return e >= t.length - 1 ? t.pop() : t.splice(e, 1)[0];
      }
      var Pt = (function (t) {
        return (
          (t[(t.Emulated = 0)] = "Emulated"),
          (t[(t.None = 2)] = "None"),
          (t[(t.ShadowDom = 3)] = "ShadowDom"),
          t
        );
      })({});
      const jt = {},
        Nt = [],
        Mt = ot({ ɵcmp: ot }),
        Ut = ot({ ɵdir: ot }),
        Dt = ot({ ɵpipe: ot }),
        Lt = ot({ ɵmod: ot }),
        Ft = ot({ ɵloc: ot }),
        Ht = ot({ ɵfac: ot }),
        Vt = ot({ __NG_ELEMENT_ID__: ot });
      let $t = 0;
      function qt(t) {
        return K(() => {
          const e = {},
            n = {
              type: t.type,
              providersResolver: null,
              decls: t.decls,
              vars: t.vars,
              factory: null,
              template: t.template || null,
              consts: t.consts || null,
              ngContentSelectors: t.ngContentSelectors,
              hostBindings: t.hostBindings || null,
              hostVars: t.hostVars || 0,
              hostAttrs: t.hostAttrs || null,
              contentQueries: t.contentQueries || null,
              declaredInputs: e,
              inputs: null,
              outputs: null,
              exportAs: t.exportAs || null,
              onPush: t.changeDetection === yt.OnPush,
              directiveDefs: null,
              pipeDefs: null,
              selectors: t.selectors || Nt,
              viewQuery: t.viewQuery || null,
              features: t.features || null,
              data: t.data || {},
              encapsulation: t.encapsulation || Pt.Emulated,
              id: "c",
              styles: t.styles || Nt,
              _: null,
              setInput: null,
              schemas: t.schemas || null,
              tView: null,
            },
            r = t.directives,
            s = t.features,
            i = t.pipes;
          return (
            (n.id += $t++),
            (n.inputs = Zt(t.inputs, e)),
            (n.outputs = Zt(t.outputs)),
            s && s.forEach((t) => t(n)),
            (n.directiveDefs = r
              ? () => ("function" == typeof r ? r() : r).map(zt)
              : null),
            (n.pipeDefs = i
              ? () => ("function" == typeof i ? i() : i).map(Bt)
              : null),
            n
          );
        });
      }
      function zt(t) {
        return (
          Jt(t) ||
          (function (t) {
            return t[Ut] || null;
          })(t)
        );
      }
      function Bt(t) {
        return (function (t) {
          return t[Dt] || null;
        })(t);
      }
      const Wt = {};
      function Gt(t) {
        const e = {
          type: t.type,
          bootstrap: t.bootstrap || Nt,
          declarations: t.declarations || Nt,
          imports: t.imports || Nt,
          exports: t.exports || Nt,
          transitiveCompileScopes: null,
          schemas: t.schemas || null,
          id: t.id || null,
        };
        return (
          null != t.id &&
            K(() => {
              Wt[t.id] = t.type;
            }),
          e
        );
      }
      function Zt(t, e) {
        if (null == t) return jt;
        const n = {};
        for (const r in t)
          if (t.hasOwnProperty(r)) {
            let s = t[r],
              i = s;
            Array.isArray(s) && ((i = s[1]), (s = s[0])),
              (n[s] = r),
              e && (e[s] = i);
          }
        return n;
      }
      const Qt = qt;
      function Jt(t) {
        return t[Mt] || null;
      }
      function Yt(t, e) {
        const n = t[Lt] || null;
        if (!n && !0 === e)
          throw new Error(`Type ${st(t)} does not have '\u0275mod' property.`);
        return n;
      }
      function Kt(t) {
        return "string" == typeof t ? t : null == t ? "" : "" + t;
      }
      function Xt(t) {
        return "function" == typeof t
          ? t.name || t.toString()
          : "object" == typeof t && null != t && "function" == typeof t.type
          ? t.type.name || t.type.toString()
          : Kt(t);
      }
      var te = (function (t) {
        return (
          (t[(t.Default = 0)] = "Default"),
          (t[(t.Host = 1)] = "Host"),
          (t[(t.Self = 2)] = "Self"),
          (t[(t.SkipSelf = 4)] = "SkipSelf"),
          (t[(t.Optional = 8)] = "Optional"),
          t
        );
      })({});
      let ee;
      function ne(t) {
        const e = ee;
        return (ee = t), e;
      }
      function re(t, e, n) {
        const r = ct(t);
        if (r && "root" == r.providedIn)
          return void 0 === r.value ? (r.value = r.factory()) : r.value;
        if (n & te.Optional) return null;
        if (void 0 !== e) return e;
        throw new Error(`Injector: NOT_FOUND [${st(t)}]`);
      }
      const se = {},
        ie = /\n/gm,
        oe = ot({ provide: String, useValue: ot });
      let ae = void 0;
      function le(t) {
        const e = ae;
        return (ae = t), e;
      }
      function ce(t, e = te.Default) {
        if (void 0 === ae)
          throw new Error("inject() must be called from an injection context");
        return null === ae
          ? re(t, void 0, e)
          : ae.get(t, e & te.Optional ? null : void 0, e);
      }
      function ue(t, e = te.Default) {
        return (ee || ce)(Et(t), e);
      }
      function he(t) {
        const e = [];
        for (let n = 0; n < t.length; n++) {
          const r = Et(t[n]);
          if (Array.isArray(r)) {
            if (0 === r.length)
              throw new Error("Arguments array must have arguments.");
            let t = void 0,
              n = te.Default;
            for (let e = 0; e < r.length; e++) {
              const s = r[e];
              s instanceof et || "Optional" === s.ngMetadataName || s === et
                ? (n |= te.Optional)
                : s instanceof rt || "SkipSelf" === s.ngMetadataName || s === rt
                ? (n |= te.SkipSelf)
                : s instanceof nt || "Self" === s.ngMetadataName || s === nt
                ? (n |= te.Self)
                : (t = s instanceof tt || s === tt ? s.token : s);
            }
            e.push(ue(t, n));
          } else e.push(ue(r));
        }
        return e;
      }
      let de = void 0;
      function pe(t) {
        return Array.isArray(t) && "object" == typeof t[1];
      }
      function fe(t) {
        return Array.isArray(t) && !0 === t[1];
      }
      function ge(t) {
        return 0 != (8 & t.flags);
      }
      function me(t) {
        return 2 == (2 & t.flags);
      }
      function ve(t) {
        return 1 == (1 & t.flags);
      }
      function ye(t) {
        return null !== t.template;
      }
      function _e(t) {
        return !!t.listen;
      }
      const be = {
        createRenderer: (t, e) =>
          void 0 !== de
            ? de
            : "undefined" != typeof document
            ? document
            : void 0,
      };
      function we(t) {
        for (; Array.isArray(t); ) t = t[0];
        return t;
      }
      function xe(t, e) {
        return we(e[t.index]);
      }
      function Ce(t, e) {
        return t.data[e];
      }
      function Se(t, e) {
        const n = e[t];
        return pe(n) ? n : n[0];
      }
      function ke(t) {
        const e = (function (t) {
          return t.__ngContext__ || null;
        })(t);
        return e ? (Array.isArray(e) ? e : e.lView) : null;
      }
      function Ee(t) {
        return 4 == (4 & t[2]);
      }
      function Te(t) {
        return 128 == (128 & t[2]);
      }
      function Ae(t, e) {
        return null == e ? null : t[e];
      }
      function Oe(t) {
        t[18] = 0;
      }
      function Ie(t, e) {
        t[5] += e;
        let n = t,
          r = t[3];
        for (
          ;
          null !== r && ((1 === e && 1 === n[5]) || (-1 === e && 0 === n[5]));

        )
          (r[5] += e), (n = r), (r = r[3]);
      }
      const Re = {
        lFrame: Je(null),
        bindingsEnabled: !0,
        isInCheckNoChangesMode: !1,
      };
      function Pe() {
        return Re.bindingsEnabled;
      }
      function je() {
        return Re.lFrame.lView;
      }
      function Ne() {
        return Re.lFrame.tView;
      }
      function Me() {
        let t = Ue();
        for (; null !== t && 64 === t.type; ) t = t.parent;
        return t;
      }
      function Ue() {
        return Re.lFrame.currentTNode;
      }
      function De(t, e) {
        const n = Re.lFrame;
        (n.currentTNode = t), (n.isParent = e);
      }
      function Le() {
        return Re.lFrame.isParent;
      }
      function Fe() {
        return Re.isInCheckNoChangesMode;
      }
      function He(t) {
        Re.isInCheckNoChangesMode = t;
      }
      function Ve() {
        return Re.lFrame.bindingIndex++;
      }
      function $e(t, e) {
        const n = Re.lFrame;
        (n.bindingIndex = n.bindingRootIndex = t), qe(e);
      }
      function qe(t) {
        Re.lFrame.currentDirectiveIndex = t;
      }
      function ze() {
        return Re.lFrame.currentQueryIndex;
      }
      function Be(t) {
        Re.lFrame.currentQueryIndex = t;
      }
      function We(t) {
        const e = t[1];
        return 2 === e.type ? e.declTNode : 1 === e.type ? t[6] : null;
      }
      function Ge(t, e, n) {
        if (n & te.SkipSelf) {
          let r = e,
            s = t;
          for (
            ;
            (r = r.parent),
              !(
                null !== r ||
                n & te.Host ||
                ((r = We(s)), null === r) ||
                ((s = s[15]), 10 & r.type)
              );

          );
          if (null === r) return !1;
          (e = r), (t = s);
        }
        const r = (Re.lFrame = Qe());
        return (r.currentTNode = e), (r.lView = t), !0;
      }
      function Ze(t) {
        const e = Qe(),
          n = t[1];
        (Re.lFrame = e),
          (e.currentTNode = n.firstChild),
          (e.lView = t),
          (e.tView = n),
          (e.contextLView = t),
          (e.bindingIndex = n.bindingStartIndex),
          (e.inI18n = !1);
      }
      function Qe() {
        const t = Re.lFrame,
          e = null === t ? null : t.child;
        return null === e ? Je(t) : e;
      }
      function Je(t) {
        const e = {
          currentTNode: null,
          isParent: !0,
          lView: null,
          tView: null,
          selectedIndex: -1,
          contextLView: null,
          elementDepthCount: 0,
          currentNamespace: null,
          currentDirectiveIndex: -1,
          bindingRootIndex: -1,
          bindingIndex: -1,
          currentQueryIndex: 0,
          parent: t,
          child: null,
          inI18n: !1,
        };
        return null !== t && (t.child = e), e;
      }
      function Ye() {
        const t = Re.lFrame;
        return (
          (Re.lFrame = t.parent), (t.currentTNode = null), (t.lView = null), t
        );
      }
      const Ke = Ye;
      function Xe() {
        const t = Ye();
        (t.isParent = !0),
          (t.tView = null),
          (t.selectedIndex = -1),
          (t.contextLView = null),
          (t.elementDepthCount = 0),
          (t.currentDirectiveIndex = -1),
          (t.currentNamespace = null),
          (t.bindingRootIndex = -1),
          (t.bindingIndex = -1),
          (t.currentQueryIndex = 0);
      }
      function tn() {
        return Re.lFrame.selectedIndex;
      }
      function en(t) {
        Re.lFrame.selectedIndex = t;
      }
      function nn() {
        const t = Re.lFrame;
        return Ce(t.tView, t.selectedIndex);
      }
      class rn {
        constructor(t) {
          this.changingThisBreaksApplicationSecurity = t;
        }
        toString() {
          return (
            "SafeValue must use [property]=binding: " +
            this.changingThisBreaksApplicationSecurity +
            " (see http://g.co/ng/security#xss)"
          );
        }
      }
      let sn = !0,
        on = !1;
      function an() {
        return (on = !0), sn;
      }
      const ln = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi,
        cn = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
      var un = (function (t) {
        return (
          (t[(t.NONE = 0)] = "NONE"),
          (t[(t.HTML = 1)] = "HTML"),
          (t[(t.STYLE = 2)] = "STYLE"),
          (t[(t.SCRIPT = 3)] = "SCRIPT"),
          (t[(t.URL = 4)] = "URL"),
          (t[(t.RESOURCE_URL = 5)] = "RESOURCE_URL"),
          t
        );
      })({});
      function hn(t) {
        const e = (function () {
          const t = je();
          return t && t[12];
        })();
        return e
          ? e.sanitize(un.URL, t) || ""
          : (function (t, e) {
              const n = (function (t) {
                return (t instanceof rn && t.getTypeName()) || null;
              })(t);
              if (null != n && n !== e) {
                if ("ResourceURL" === n && "URL" === e) return !0;
                throw new Error(
                  `Required a safe ${e}, got a ${n} (see http://g.co/ng/security#xss)`
                );
              }
              return n === e;
            })(t, "URL")
          ? (r = t) instanceof rn
            ? r.changingThisBreaksApplicationSecurity
            : r
          : ((n = Kt(t)),
            (n = String(n)).match(ln) || n.match(cn)
              ? n
              : (an() &&
                  console.warn(
                    `WARNING: sanitizing unsafe URL value ${n} (see http://g.co/ng/security#xss)`
                  ),
                "unsafe:" + n));
        var n, r;
      }
      function dn(t, e) {
        return t.hasOwnProperty(Ht) ? t[Ht] : null;
      }
      class pn extends Error {
        constructor(t, e) {
          super(
            (function (t, e) {
              return `${t ? `NG0${t}: ` : ""}${e}`;
            })(t, e)
          ),
            (this.code = t);
        }
      }
      function fn(t, e) {
        const n = e ? " in " + e : "";
        throw new pn("201", `No provider for ${Xt(t)} found${n}`);
      }
      class gn {
        constructor(t, e, n) {
          (this.previousValue = t),
            (this.currentValue = e),
            (this.firstChange = n);
        }
        isFirstChange() {
          return this.firstChange;
        }
      }
      function mn() {
        return vn;
      }
      function vn(t) {
        return t.type.prototype.ngOnChanges && (t.setInput = _n), yn;
      }
      function yn() {
        const t = bn(this),
          e = null == t ? void 0 : t.current;
        if (e) {
          const n = t.previous;
          if (n === jt) t.previous = e;
          else for (let t in e) n[t] = e[t];
          (t.current = null), this.ngOnChanges(e);
        }
      }
      function _n(t, e, n, r) {
        const s =
            bn(t) ||
            (function (t, e) {
              return (t.__ngSimpleChanges__ = e);
            })(t, { previous: jt, current: null }),
          i = s.current || (s.current = {}),
          o = s.previous,
          a = this.declaredInputs[n],
          l = o[a];
        (i[a] = new gn(l && l.currentValue, e, o === jt)), (t[r] = e);
      }
      function bn(t) {
        return t.__ngSimpleChanges__ || null;
      }
      function wn(t, e) {
        for (let n = e.directiveStart, r = e.directiveEnd; n < r; n++) {
          const e = t.data[n].type.prototype,
            {
              ngAfterContentInit: r,
              ngAfterContentChecked: s,
              ngAfterViewInit: i,
              ngAfterViewChecked: o,
              ngOnDestroy: a,
            } = e;
          r && (t.contentHooks || (t.contentHooks = [])).push(-n, r),
            s &&
              ((t.contentHooks || (t.contentHooks = [])).push(n, s),
              (t.contentCheckHooks || (t.contentCheckHooks = [])).push(n, s)),
            i && (t.viewHooks || (t.viewHooks = [])).push(-n, i),
            o &&
              ((t.viewHooks || (t.viewHooks = [])).push(n, o),
              (t.viewCheckHooks || (t.viewCheckHooks = [])).push(n, o)),
            null != a && (t.destroyHooks || (t.destroyHooks = [])).push(n, a);
        }
      }
      function xn(t, e, n) {
        kn(t, e, 3, n);
      }
      function Cn(t, e, n, r) {
        (3 & t[2]) === n && kn(t, e, n, r);
      }
      function Sn(t, e) {
        let n = t[2];
        (3 & n) === e && ((n &= 2047), (n += 1), (t[2] = n));
      }
      function kn(t, e, n, r) {
        const s = null != r ? r : -1;
        let i = 0;
        for (let o = void 0 !== r ? 65535 & t[18] : 0; o < e.length; o++)
          if ("number" == typeof e[o + 1]) {
            if (((i = e[o]), null != r && i >= r)) break;
          } else
            e[o] < 0 && (t[18] += 65536),
              (i < s || -1 == s) &&
                (En(t, n, e, o), (t[18] = (4294901760 & t[18]) + o + 2)),
              o++;
      }
      function En(t, e, n, r) {
        const s = n[r] < 0,
          i = n[r + 1],
          o = t[s ? -n[r] : n[r]];
        s
          ? t[2] >> 11 < t[18] >> 16 &&
            (3 & t[2]) === e &&
            ((t[2] += 2048), i.call(o))
          : i.call(o);
      }
      mn.ngInherit = !0;
      class Tn {
        constructor(t, e, n) {
          (this.factory = t),
            (this.resolving = !1),
            (this.canSeeViewProviders = e),
            (this.injectImpl = n);
        }
      }
      function An(t, e, n) {
        const r = _e(t);
        let s = 0;
        for (; s < n.length; ) {
          const i = n[s];
          if ("number" == typeof i) {
            if (0 !== i) break;
            s++;
            const o = n[s++],
              a = n[s++],
              l = n[s++];
            r ? t.setAttribute(e, a, l, o) : e.setAttributeNS(o, a, l);
          } else {
            const o = i,
              a = n[++s];
            In(o)
              ? r && t.setProperty(e, o, a)
              : r
              ? t.setAttribute(e, o, a)
              : e.setAttribute(o, a),
              s++;
          }
        }
        return s;
      }
      function On(t) {
        return 3 === t || 4 === t || 6 === t;
      }
      function In(t) {
        return 64 === t.charCodeAt(0);
      }
      function Rn(t, e) {
        if (null === e || 0 === e.length);
        else if (null === t || 0 === t.length) t = e.slice();
        else {
          let n = -1;
          for (let r = 0; r < e.length; r++) {
            const s = e[r];
            "number" == typeof s
              ? (n = s)
              : 0 === n ||
                Pn(t, n, s, null, -1 === n || 2 === n ? e[++r] : null);
          }
        }
        return t;
      }
      function Pn(t, e, n, r, s) {
        let i = 0,
          o = t.length;
        if (-1 === e) o = -1;
        else
          for (; i < t.length; ) {
            const n = t[i++];
            if ("number" == typeof n) {
              if (n === e) {
                o = -1;
                break;
              }
              if (n > e) {
                o = i - 1;
                break;
              }
            }
          }
        for (; i < t.length; ) {
          const e = t[i];
          if ("number" == typeof e) break;
          if (e === n) {
            if (null === r) return void (null !== s && (t[i + 1] = s));
            if (r === t[i + 1]) return void (t[i + 2] = s);
          }
          i++, null !== r && i++, null !== s && i++;
        }
        -1 !== o && (t.splice(o, 0, e), (i = o + 1)),
          t.splice(i++, 0, n),
          null !== r && t.splice(i++, 0, r),
          null !== s && t.splice(i++, 0, s);
      }
      function jn(t) {
        return -1 !== t;
      }
      function Nn(t) {
        return 32767 & t;
      }
      function Mn(t, e) {
        let n = t >> 16,
          r = e;
        for (; n > 0; ) (r = r[15]), n--;
        return r;
      }
      let Un = !0;
      function Dn(t) {
        const e = Un;
        return (Un = t), e;
      }
      let Ln = 0;
      function Fn(t, e) {
        const n = Vn(t, e);
        if (-1 !== n) return n;
        const r = e[1];
        r.firstCreatePass &&
          ((t.injectorIndex = e.length),
          Hn(r.data, t),
          Hn(e, null),
          Hn(r.blueprint, null));
        const s = $n(t, e),
          i = t.injectorIndex;
        if (jn(s)) {
          const t = Nn(s),
            n = Mn(s, e),
            r = n[1].data;
          for (let s = 0; s < 8; s++) e[i + s] = n[t + s] | r[t + s];
        }
        return (e[i + 8] = s), i;
      }
      function Hn(t, e) {
        t.push(0, 0, 0, 0, 0, 0, 0, 0, e);
      }
      function Vn(t, e) {
        return -1 === t.injectorIndex ||
          (t.parent && t.parent.injectorIndex === t.injectorIndex) ||
          null === e[t.injectorIndex + 8]
          ? -1
          : t.injectorIndex;
      }
      function $n(t, e) {
        if (t.parent && -1 !== t.parent.injectorIndex)
          return t.parent.injectorIndex;
        let n = 0,
          r = null,
          s = e;
        for (; null !== s; ) {
          const t = s[1],
            e = t.type;
          if (((r = 2 === e ? t.declTNode : 1 === e ? s[6] : null), null === r))
            return -1;
          if ((n++, (s = s[15]), -1 !== r.injectorIndex))
            return r.injectorIndex | (n << 16);
        }
        return -1;
      }
      function qn(t, e, n) {
        !(function (t, e, n) {
          let r;
          "string" == typeof n
            ? (r = n.charCodeAt(0) || 0)
            : n.hasOwnProperty(Vt) && (r = n[Vt]),
            null == r && (r = n[Vt] = Ln++);
          const s = 255 & r,
            i = 1 << s,
            o = 64 & s,
            a = 32 & s,
            l = e.data;
          128 & s
            ? o
              ? a
                ? (l[t + 7] |= i)
                : (l[t + 6] |= i)
              : a
              ? (l[t + 5] |= i)
              : (l[t + 4] |= i)
            : o
            ? a
              ? (l[t + 3] |= i)
              : (l[t + 2] |= i)
            : a
            ? (l[t + 1] |= i)
            : (l[t] |= i);
        })(t, e, n);
      }
      function zn(t, e, n) {
        if (n & te.Optional) return t;
        fn(e, "NodeInjector");
      }
      function Bn(t, e, n, r) {
        if (
          (n & te.Optional && void 0 === r && (r = null),
          0 == (n & (te.Self | te.Host)))
        ) {
          const s = t[9],
            i = ne(void 0);
          try {
            return s ? s.get(e, r, n & te.Optional) : re(e, r, n & te.Optional);
          } finally {
            ne(i);
          }
        }
        return zn(r, e, n);
      }
      function Wn(t, e, n, r = te.Default, s) {
        if (null !== t) {
          const i = (function (t) {
            if ("string" == typeof t) return t.charCodeAt(0) || 0;
            const e = t.hasOwnProperty(Vt) ? t[Vt] : void 0;
            return "number" == typeof e ? (e >= 0 ? 255 & e : Zn) : e;
          })(n);
          if ("function" == typeof i) {
            if (!Ge(e, t, r)) return r & te.Host ? zn(s, n, r) : Bn(e, n, r, s);
            try {
              const t = i();
              if (null != t || r & te.Optional) return t;
              fn(n);
            } finally {
              Ke();
            }
          } else if ("number" == typeof i) {
            let s = null,
              o = Vn(t, e),
              a = -1,
              l = r & te.Host ? e[16][6] : null;
            for (
              (-1 === o || r & te.SkipSelf) &&
              ((a = -1 === o ? $n(t, e) : e[o + 8]),
              -1 !== a && Xn(r, !1)
                ? ((s = e[1]), (o = Nn(a)), (e = Mn(a, e)))
                : (o = -1));
              -1 !== o;

            ) {
              const t = e[1];
              if (Kn(i, o, t.data)) {
                const t = Qn(o, e, n, s, r, l);
                if (t !== Gn) return t;
              }
              (a = e[o + 8]),
                -1 !== a && Xn(r, e[1].data[o + 8] === l) && Kn(i, o, e)
                  ? ((s = t), (o = Nn(a)), (e = Mn(a, e)))
                  : (o = -1);
            }
          }
        }
        return Bn(e, n, r, s);
      }
      const Gn = {};
      function Zn() {
        return new tr(Me(), je());
      }
      function Qn(t, e, n, r, s, i) {
        const o = e[1],
          a = o.data[t + 8],
          l = Jn(
            a,
            o,
            n,
            null == r ? me(a) && Un : r != o && 0 != (3 & a.type),
            s & te.Host && i === a
          );
        return null !== l ? Yn(e, o, l, a) : Gn;
      }
      function Jn(t, e, n, r, s) {
        const i = t.providerIndexes,
          o = e.data,
          a = 1048575 & i,
          l = t.directiveStart,
          c = i >> 20,
          u = s ? a + c : t.directiveEnd;
        for (let h = r ? a : a + c; h < u; h++) {
          const t = o[h];
          if ((h < l && n === t) || (h >= l && t.type === n)) return h;
        }
        if (s) {
          const t = o[l];
          if (t && ye(t) && t.type === n) return l;
        }
        return null;
      }
      function Yn(t, e, n, r) {
        let s = t[n];
        const i = e.data;
        if (s instanceof Tn) {
          const o = s;
          o.resolving &&
            (function (t, e) {
              throw new pn(
                "200",
                "Circular dependency in DI detected for " + t
              );
            })(Xt(i[n]));
          const a = Dn(o.canSeeViewProviders);
          o.resolving = !0;
          const l = o.injectImpl ? ne(o.injectImpl) : null;
          Ge(t, r, te.Default);
          try {
            (s = t[n] = o.factory(void 0, i, t, r)),
              e.firstCreatePass &&
                n >= r.directiveStart &&
                (function (t, e, n) {
                  const {
                    ngOnChanges: r,
                    ngOnInit: s,
                    ngDoCheck: i,
                  } = e.type.prototype;
                  if (r) {
                    const r = vn(e);
                    (n.preOrderHooks || (n.preOrderHooks = [])).push(t, r),
                      (
                        n.preOrderCheckHooks || (n.preOrderCheckHooks = [])
                      ).push(t, r);
                  }
                  s &&
                    (n.preOrderHooks || (n.preOrderHooks = [])).push(0 - t, s),
                    i &&
                      ((n.preOrderHooks || (n.preOrderHooks = [])).push(t, i),
                      (
                        n.preOrderCheckHooks || (n.preOrderCheckHooks = [])
                      ).push(t, i));
                })(n, i[n], e);
          } finally {
            null !== l && ne(l), Dn(a), (o.resolving = !1), Ke();
          }
        }
        return s;
      }
      function Kn(t, e, n) {
        const r = 64 & t,
          s = 32 & t;
        let i;
        return (
          (i =
            128 & t
              ? r
                ? s
                  ? n[e + 7]
                  : n[e + 6]
                : s
                ? n[e + 5]
                : n[e + 4]
              : r
              ? s
                ? n[e + 3]
                : n[e + 2]
              : s
              ? n[e + 1]
              : n[e]),
          !!(i & (1 << t))
        );
      }
      function Xn(t, e) {
        return !(t & te.Self || (t & te.Host && e));
      }
      class tr {
        constructor(t, e) {
          (this._tNode = t), (this._lView = e);
        }
        get(t, e) {
          return Wn(this._tNode, this._lView, t, void 0, e);
        }
      }
      function er(t) {
        return t.ngDebugContext;
      }
      function nr(t) {
        return t.ngOriginalError;
      }
      function rr(t, ...e) {
        t.error(...e);
      }
      class sr {
        constructor() {
          this._console = console;
        }
        handleError(t) {
          const e = this._findOriginalError(t),
            n = this._findContext(t),
            r = (function (t) {
              return t.ngErrorLogger || rr;
            })(t);
          r(this._console, "ERROR", t),
            e && r(this._console, "ORIGINAL ERROR", e),
            n && r(this._console, "ERROR CONTEXT", n);
        }
        _findContext(t) {
          return t ? (er(t) ? er(t) : this._findContext(nr(t))) : null;
        }
        _findOriginalError(t) {
          let e = nr(t);
          for (; e && nr(e); ) e = nr(e);
          return e;
        }
      }
      function ir(t, e) {
        t.__ngContext__ = e;
      }
      const or = (() =>
        (
          ("undefined" != typeof requestAnimationFrame &&
            requestAnimationFrame) ||
          setTimeout
        ).bind(Ct))();
      function ar(t) {
        return t instanceof Function ? t() : t;
      }
      var lr = (function (t) {
        return (
          (t[(t.Important = 1)] = "Important"),
          (t[(t.DashCase = 2)] = "DashCase"),
          t
        );
      })({});
      function cr(t, e) {
        return (void 0)(t, e);
      }
      function ur(t) {
        const e = t[3];
        return fe(e) ? e[3] : e;
      }
      function hr(t) {
        return pr(t[13]);
      }
      function dr(t) {
        return pr(t[4]);
      }
      function pr(t) {
        for (; null !== t && !fe(t); ) t = t[4];
        return t;
      }
      function fr(t, e, n, r, s) {
        if (null != r) {
          let i,
            o = !1;
          fe(r) ? (i = r) : pe(r) && ((o = !0), (r = r[0]));
          const a = we(r);
          0 === t && null !== n
            ? null == s
              ? wr(e, n, a)
              : br(e, n, a, s || null, !0)
            : 1 === t && null !== n
            ? br(e, n, a, s || null, !0)
            : 2 === t
            ? (function (t, e, n) {
                const r = Cr(t, e);
                r &&
                  (function (t, e, n, r) {
                    _e(t) ? t.removeChild(e, n, r) : e.removeChild(n);
                  })(t, r, e, n);
              })(e, a, o)
            : 3 === t && e.destroyNode(a),
            null != i &&
              (function (t, e, n, r, s) {
                const i = n[7];
                i !== we(n) && fr(e, t, r, i, s);
                for (let o = 10; o < n.length; o++) {
                  const s = n[o];
                  Ar(s[1], s, t, e, r, i);
                }
              })(e, t, i, n, s);
        }
      }
      function gr(t, e, n) {
        return _e(t)
          ? t.createElement(e, n)
          : null === n
          ? t.createElement(e)
          : t.createElementNS(n, e);
      }
      function mr(t, e) {
        const n = t[9],
          r = n.indexOf(e),
          s = e[3];
        1024 & e[2] && ((e[2] &= -1025), Ie(s, -1)), n.splice(r, 1);
      }
      function vr(t, e) {
        if (t.length <= 10) return;
        const n = 10 + e,
          r = t[n];
        if (r) {
          const i = r[17];
          null !== i && i !== t && mr(i, r), e > 0 && (t[n - 1][4] = r[4]);
          const o = Rt(t, 10 + e);
          Ar(r[1], (s = r), s[11], 2, null, null), (s[0] = null), (s[6] = null);
          const a = o[19];
          null !== a && a.detachView(o[1]),
            (r[3] = null),
            (r[4] = null),
            (r[2] &= -129);
        }
        var s;
        return r;
      }
      function yr(t, e) {
        if (!(256 & e[2])) {
          const n = e[11];
          _e(n) && n.destroyNode && Ar(t, e, n, 3, null, null),
            (function (t) {
              let e = t[13];
              if (!e) return _r(t[1], t);
              for (; e; ) {
                let n = null;
                if (pe(e)) n = e[13];
                else {
                  const t = e[10];
                  t && (n = t);
                }
                if (!n) {
                  for (; e && !e[4] && e !== t; )
                    pe(e) && _r(e[1], e), (e = e[3]);
                  null === e && (e = t), pe(e) && _r(e[1], e), (n = e && e[4]);
                }
                e = n;
              }
            })(e);
        }
      }
      function _r(t, e) {
        if (!(256 & e[2])) {
          (e[2] &= -129),
            (e[2] |= 256),
            (function (t, e) {
              let n;
              if (null != t && null != (n = t.destroyHooks))
                for (let r = 0; r < n.length; r += 2) {
                  const t = e[n[r]];
                  if (!(t instanceof Tn)) {
                    const e = n[r + 1];
                    if (Array.isArray(e))
                      for (let n = 0; n < e.length; n += 2)
                        e[n + 1].call(t[e[n]]);
                    else e.call(t);
                  }
                }
            })(t, e),
            (function (t, e) {
              const n = t.cleanup;
              if (null !== n) {
                const t = e[7];
                for (let r = 0; r < n.length - 1; r += 2)
                  if ("string" == typeof n[r]) {
                    const s = n[r + 1],
                      i = "function" == typeof s ? s(e) : we(e[s]),
                      o = t[n[r + 2]],
                      a = n[r + 3];
                    "boolean" == typeof a
                      ? i.removeEventListener(n[r], o, a)
                      : a >= 0
                      ? t[a]()
                      : t[-a].unsubscribe(),
                      (r += 2);
                  } else n[r].call(t[n[r + 1]]);
                e[7] = null;
              }
            })(t, e),
            1 === e[1].type && _e(e[11]) && e[11].destroy();
          const n = e[17];
          if (null !== n && fe(e[3])) {
            n !== e[3] && mr(n, e);
            const r = e[19];
            null !== r && r.detachView(t);
          }
        }
      }
      function br(t, e, n, r, s) {
        _e(t) ? t.insertBefore(e, n, r, s) : e.insertBefore(n, r, s);
      }
      function wr(t, e, n) {
        _e(t) ? t.appendChild(e, n) : e.appendChild(n);
      }
      function xr(t, e, n, r, s) {
        null !== r ? br(t, e, n, r, s) : wr(t, e, n);
      }
      function Cr(t, e) {
        return _e(t) ? t.parentNode(e) : e.parentNode;
      }
      function Sr(t, e, n, r) {
        const s = (function (t, e, n) {
            return (function (t, e, n) {
              let r = e;
              for (; null !== r && 40 & r.type; ) r = (e = r).parent;
              if (null === r) return n[0];
              if (2 & r.flags) {
                const e = t.data[r.directiveStart].encapsulation;
                if (e === Pt.None || e === Pt.Emulated) return null;
              }
              return xe(r, n);
            })(t, e.parent, n);
          })(t, r, e),
          i = e[11],
          o = (function (t, e, n) {
            return (function (t, e, n) {
              return 40 & t.type ? xe(t, n) : null;
            })(t, 0, n);
          })(r.parent || e[6], 0, e);
        if (null != s)
          if (Array.isArray(n))
            for (let a = 0; a < n.length; a++) xr(i, s, n[a], o, !1);
          else xr(i, s, n, o, !1);
      }
      function kr(t, e) {
        if (null !== e) {
          const n = e.type;
          if (3 & n) return xe(e, t);
          if (4 & n) return Er(-1, t[e.index]);
          if (8 & n) {
            const n = e.child;
            if (null !== n) return kr(t, n);
            {
              const n = t[e.index];
              return fe(n) ? Er(-1, n) : we(n);
            }
          }
          if (32 & n) return cr(e, t)() || we(t[e.index]);
          {
            const n = t[16],
              r = n[6],
              s = ur(n),
              i = r.projection[e.projection];
            return null != i ? kr(s, i) : kr(t, e.next);
          }
        }
        return null;
      }
      function Er(t, e) {
        const n = 10 + t + 1;
        if (n < e.length) {
          const t = e[n],
            r = t[1].firstChild;
          if (null !== r) return kr(t, r);
        }
        return e[7];
      }
      function Tr(t, e, n, r, s, i, o) {
        for (; null != n; ) {
          const a = r[n.index],
            l = n.type;
          if (
            (o && 0 === e && (a && ir(we(a), r), (n.flags |= 4)),
            64 != (64 & n.flags))
          )
            if (8 & l) Tr(t, e, n.child, r, s, i, !1), fr(e, t, s, a, i);
            else if (32 & l) {
              const o = cr(n, r);
              let l;
              for (; (l = o()); ) fr(e, t, s, l, i);
              fr(e, t, s, a, i);
            } else 16 & l ? Or(t, e, r, n, s, i) : fr(e, t, s, a, i);
          n = o ? n.projectionNext : n.next;
        }
      }
      function Ar(t, e, n, r, s, i) {
        Tr(n, r, t.firstChild, e, s, i, !1);
      }
      function Or(t, e, n, r, s, i) {
        const o = n[16],
          a = o[6].projection[r.projection];
        if (Array.isArray(a))
          for (let l = 0; l < a.length; l++) fr(e, t, s, a[l], i);
        else Tr(t, e, a, o[3], s, i, !0);
      }
      function Ir(t, e, n) {
        _e(t) ? t.setAttribute(e, "style", n) : (e.style.cssText = n);
      }
      function Rr(t, e, n) {
        _e(t)
          ? "" === n
            ? t.removeAttribute(e, "class")
            : t.setAttribute(e, "class", n)
          : (e.className = n);
      }
      function Pr(t, e, n) {
        let r = t.length;
        for (;;) {
          const s = t.indexOf(e, n);
          if (-1 === s) return s;
          if (0 === s || t.charCodeAt(s - 1) <= 32) {
            const n = e.length;
            if (s + n === r || t.charCodeAt(s + n) <= 32) return s;
          }
          n = s + 1;
        }
      }
      function jr(t, e, n) {
        let r = 0;
        for (; r < t.length; ) {
          let s = t[r++];
          if (n && "class" === s) {
            if (((s = t[r]), -1 !== Pr(s.toLowerCase(), e, 0))) return !0;
          } else if (1 === s) {
            for (; r < t.length && "string" == typeof (s = t[r++]); )
              if (s.toLowerCase() === e) return !0;
            return !1;
          }
        }
        return !1;
      }
      function Nr(t) {
        return 4 === t.type && "ng-template" !== t.value;
      }
      function Mr(t, e, n) {
        return e === (4 !== t.type || n ? t.value : "ng-template");
      }
      function Ur(t, e, n) {
        let r = 4;
        const s = t.attrs || [],
          i = (function (t) {
            for (let e = 0; e < t.length; e++) if (On(t[e])) return e;
            return t.length;
          })(s);
        let o = !1;
        for (let a = 0; a < e.length; a++) {
          const l = e[a];
          if ("number" != typeof l) {
            if (!o)
              if (4 & r) {
                if (
                  ((r = 2 | (1 & r)),
                  ("" !== l && !Mr(t, l, n)) || ("" === l && 1 === e.length))
                ) {
                  if (Dr(r)) return !1;
                  o = !0;
                }
              } else {
                const c = 8 & r ? l : e[++a];
                if (8 & r && null !== t.attrs) {
                  if (!jr(t.attrs, c, n)) {
                    if (Dr(r)) return !1;
                    o = !0;
                  }
                  continue;
                }
                const u = Lr(8 & r ? "class" : l, s, Nr(t), n);
                if (-1 === u) {
                  if (Dr(r)) return !1;
                  o = !0;
                  continue;
                }
                if ("" !== c) {
                  let t;
                  t = u > i ? "" : s[u + 1].toLowerCase();
                  const e = 8 & r ? t : null;
                  if ((e && -1 !== Pr(e, c, 0)) || (2 & r && c !== t)) {
                    if (Dr(r)) return !1;
                    o = !0;
                  }
                }
              }
          } else {
            if (!o && !Dr(r) && !Dr(l)) return !1;
            if (o && Dr(l)) continue;
            (o = !1), (r = l | (1 & r));
          }
        }
        return Dr(r) || o;
      }
      function Dr(t) {
        return 0 == (1 & t);
      }
      function Lr(t, e, n, r) {
        if (null === e) return -1;
        let s = 0;
        if (r || !n) {
          let n = !1;
          for (; s < e.length; ) {
            const r = e[s];
            if (r === t) return s;
            if (3 === r || 6 === r) n = !0;
            else {
              if (1 === r || 2 === r) {
                let t = e[++s];
                for (; "string" == typeof t; ) t = e[++s];
                continue;
              }
              if (4 === r) break;
              if (0 === r) {
                s += 4;
                continue;
              }
            }
            s += n ? 1 : 2;
          }
          return -1;
        }
        return (function (t, e) {
          let n = t.indexOf(4);
          if (n > -1)
            for (n++; n < t.length; ) {
              const r = t[n];
              if ("number" == typeof r) return -1;
              if (r === e) return n;
              n++;
            }
          return -1;
        })(e, t);
      }
      function Fr(t, e, n = !1) {
        for (let r = 0; r < e.length; r++) if (Ur(t, e[r], n)) return !0;
        return !1;
      }
      function Hr(t, e) {
        return t ? ":not(" + e.trim() + ")" : e;
      }
      function Vr(t) {
        let e = t[0],
          n = 1,
          r = 2,
          s = "",
          i = !1;
        for (; n < t.length; ) {
          let o = t[n];
          if ("string" == typeof o)
            if (2 & r) {
              const e = t[++n];
              s += "[" + o + (e.length > 0 ? '="' + e + '"' : "") + "]";
            } else 8 & r ? (s += "." + o) : 4 & r && (s += " " + o);
          else
            "" === s || Dr(o) || ((e += Hr(i, s)), (s = "")),
              (r = o),
              (i = i || !Dr(r));
          n++;
        }
        return "" !== s && (e += Hr(i, s)), e;
      }
      const $r = {};
      function qr(t) {
        zr(Ne(), je(), tn() + t, Fe());
      }
      function zr(t, e, n, r) {
        if (!r)
          if (3 == (3 & e[2])) {
            const r = t.preOrderCheckHooks;
            null !== r && xn(e, r, n);
          } else {
            const r = t.preOrderHooks;
            null !== r && Cn(e, r, 0, n);
          }
        en(n);
      }
      function Br(t, e) {
        const n = t.contentQueries;
        if (null !== n)
          for (let r = 0; r < n.length; r += 2) {
            const s = n[r],
              i = n[r + 1];
            if (-1 !== i) {
              const n = t.data[i];
              Be(s), n.contentQueries(2, e[i], i);
            }
          }
      }
      function Wr(t, e, n, r, s, i, o, a, l, c) {
        const u = e.blueprint.slice();
        return (
          (u[0] = s),
          (u[2] = 140 | r),
          Oe(u),
          (u[3] = u[15] = t),
          (u[8] = n),
          (u[10] = o || (t && t[10])),
          (u[11] = a || (t && t[11])),
          (u[12] = l || (t && t[12]) || null),
          (u[9] = c || (t && t[9]) || null),
          (u[6] = i),
          (u[16] = 2 == e.type ? t[16] : u),
          u
        );
      }
      function Gr(t, e, n, r, s) {
        let i = t.data[e];
        if (null === i)
          (i = (function (t, e, n, r, s) {
            const i = Ue(),
              o = Le(),
              a = (t.data[e] = (function (t, e, n, r, s, i) {
                return {
                  type: n,
                  index: r,
                  insertBeforeIndex: null,
                  injectorIndex: e ? e.injectorIndex : -1,
                  directiveStart: -1,
                  directiveEnd: -1,
                  directiveStylingLast: -1,
                  propertyBindings: null,
                  flags: 0,
                  providerIndexes: 0,
                  value: s,
                  attrs: i,
                  mergedAttrs: null,
                  localNames: null,
                  initialInputs: void 0,
                  inputs: null,
                  outputs: null,
                  tViews: null,
                  next: null,
                  projectionNext: null,
                  child: null,
                  parent: e,
                  projection: null,
                  styles: null,
                  stylesWithoutHost: null,
                  residualStyles: void 0,
                  classes: null,
                  classesWithoutHost: null,
                  residualClasses: void 0,
                  classBindings: 0,
                  styleBindings: 0,
                };
              })(0, o ? i : i && i.parent, n, e, r, s));
            return (
              null === t.firstChild && (t.firstChild = a),
              null !== i &&
                (o
                  ? null == i.child && null !== a.parent && (i.child = a)
                  : null === i.next && (i.next = a)),
              a
            );
          })(t, e, n, r, s)),
            Re.lFrame.inI18n && (i.flags |= 64);
        else if (64 & i.type) {
          (i.type = n), (i.value = r), (i.attrs = s);
          const t = (function () {
            const t = Re.lFrame,
              e = t.currentTNode;
            return t.isParent ? e : e.parent;
          })();
          i.injectorIndex = null === t ? -1 : t.injectorIndex;
        }
        return De(i, !0), i;
      }
      function Zr(t, e, n, r) {
        if (0 === n) return -1;
        const s = e.length;
        for (let i = 0; i < n; i++)
          e.push(r), t.blueprint.push(r), t.data.push(null);
        return s;
      }
      function Qr(t, e, n) {
        Ze(e);
        try {
          const r = t.viewQuery;
          null !== r && Ss(1, r, n);
          const s = t.template;
          null !== s && Kr(t, e, s, 1, n),
            t.firstCreatePass && (t.firstCreatePass = !1),
            t.staticContentQueries && Br(t, e),
            t.staticViewQueries && Ss(2, t.viewQuery, n);
          const i = t.components;
          null !== i &&
            (function (t, e) {
              for (let n = 0; n < e.length; n++) _s(t, e[n]);
            })(e, i);
        } catch (r) {
          throw (t.firstCreatePass && (t.incompleteFirstPass = !0), r);
        } finally {
          (e[2] &= -5), Xe();
        }
      }
      function Jr(t, e, n, r) {
        const s = e[2];
        if (256 == (256 & s)) return;
        Ze(e);
        const i = Fe();
        try {
          Oe(e),
            (Re.lFrame.bindingIndex = t.bindingStartIndex),
            null !== n && Kr(t, e, n, 2, r);
          const o = 3 == (3 & s);
          if (!i)
            if (o) {
              const n = t.preOrderCheckHooks;
              null !== n && xn(e, n, null);
            } else {
              const n = t.preOrderHooks;
              null !== n && Cn(e, n, 0, null), Sn(e, 0);
            }
          if (
            ((function (t) {
              for (let e = hr(t); null !== e; e = dr(e)) {
                if (!e[2]) continue;
                const t = e[9];
                for (let e = 0; e < t.length; e++) {
                  const n = t[e],
                    r = n[3];
                  0 == (1024 & n[2]) && Ie(r, 1), (n[2] |= 1024);
                }
              }
            })(e),
            (function (t) {
              for (let e = hr(t); null !== e; e = dr(e))
                for (let t = 10; t < e.length; t++) {
                  const n = e[t],
                    r = n[1];
                  Te(n) && Jr(r, n, r.template, n[8]);
                }
            })(e),
            null !== t.contentQueries && Br(t, e),
            !i)
          )
            if (o) {
              const n = t.contentCheckHooks;
              null !== n && xn(e, n);
            } else {
              const n = t.contentHooks;
              null !== n && Cn(e, n, 1), Sn(e, 1);
            }
          !(function (t, e) {
            const n = t.hostBindingOpCodes;
            if (null !== n)
              try {
                for (let t = 0; t < n.length; t++) {
                  const r = n[t];
                  if (r < 0) en(~r);
                  else {
                    const s = r,
                      i = n[++t],
                      o = n[++t];
                    $e(i, s), o(2, e[s]);
                  }
                }
              } finally {
                en(-1);
              }
          })(t, e);
          const a = t.components;
          null !== a &&
            (function (t, e) {
              for (let n = 0; n < e.length; n++) vs(t, e[n]);
            })(e, a);
          const l = t.viewQuery;
          if ((null !== l && Ss(2, l, r), !i))
            if (o) {
              const n = t.viewCheckHooks;
              null !== n && xn(e, n);
            } else {
              const n = t.viewHooks;
              null !== n && Cn(e, n, 2), Sn(e, 2);
            }
          !0 === t.firstUpdatePass && (t.firstUpdatePass = !1),
            i || (e[2] &= -73),
            1024 & e[2] && ((e[2] &= -1025), Ie(e[3], -1));
        } finally {
          Xe();
        }
      }
      function Yr(t, e, n, r) {
        const s = e[10],
          i = !Fe(),
          o = Ee(e);
        try {
          i && !o && s.begin && s.begin(), o && Qr(t, e, r), Jr(t, e, n, r);
        } finally {
          i && !o && s.end && s.end();
        }
      }
      function Kr(t, e, n, r, s) {
        const i = tn();
        try {
          en(-1), 2 & r && e.length > 20 && zr(t, e, 20, Fe()), n(r, s);
        } finally {
          en(i);
        }
      }
      function Xr(t, e, n) {
        Pe() &&
          ((function (t, e, n, r) {
            const s = n.directiveStart,
              i = n.directiveEnd;
            t.firstCreatePass || Fn(n, e), ir(r, e);
            const o = n.initialInputs;
            for (let a = s; a < i; a++) {
              const r = t.data[a],
                i = ye(r);
              i && ps(e, n, r);
              const l = Yn(e, t, a, n);
              ir(l, e),
                null !== o && fs(0, a - s, l, r, 0, o),
                i && (Se(n.index, e)[8] = l);
            }
          })(t, e, n, xe(n, e)),
          128 == (128 & n.flags) &&
            (function (t, e, n) {
              const r = n.directiveStart,
                s = n.directiveEnd,
                i = n.index,
                o = Re.lFrame.currentDirectiveIndex;
              try {
                en(i);
                for (let n = r; n < s; n++) {
                  const r = t.data[n],
                    s = e[n];
                  qe(n),
                    (null === r.hostBindings &&
                      0 === r.hostVars &&
                      null === r.hostAttrs) ||
                      ls(r, s);
                }
              } finally {
                en(-1), qe(o);
              }
            })(t, e, n));
      }
      function ts(t, e, n = xe) {
        const r = e.localNames;
        if (null !== r) {
          let s = e.index + 1;
          for (let i = 0; i < r.length; i += 2) {
            const o = r[i + 1],
              a = -1 === o ? n(e, t) : t[o];
            t[s++] = a;
          }
        }
      }
      function es(t) {
        const e = t.tView;
        return null === e || e.incompleteFirstPass
          ? (t.tView = ns(
              1,
              null,
              t.template,
              t.decls,
              t.vars,
              t.directiveDefs,
              t.pipeDefs,
              t.viewQuery,
              t.schemas,
              t.consts
            ))
          : e;
      }
      function ns(t, e, n, r, s, i, o, a, l, c) {
        const u = 20 + r,
          h = u + s,
          d = (function (t, e) {
            const n = [];
            for (let r = 0; r < e; r++) n.push(r < t ? null : $r);
            return n;
          })(u, h),
          p = "function" == typeof c ? c() : c;
        return (d[1] = {
          type: t,
          blueprint: d,
          template: n,
          queries: null,
          viewQuery: a,
          declTNode: e,
          data: d.slice().fill(null, u),
          bindingStartIndex: u,
          expandoStartIndex: h,
          hostBindingOpCodes: null,
          firstCreatePass: !0,
          firstUpdatePass: !0,
          staticViewQueries: !1,
          staticContentQueries: !1,
          preOrderHooks: null,
          preOrderCheckHooks: null,
          contentHooks: null,
          contentCheckHooks: null,
          viewHooks: null,
          viewCheckHooks: null,
          destroyHooks: null,
          cleanup: null,
          contentQueries: null,
          components: null,
          directiveRegistry: "function" == typeof i ? i() : i,
          pipeRegistry: "function" == typeof o ? o() : o,
          firstChild: null,
          schemas: l,
          consts: p,
          incompleteFirstPass: !1,
        });
      }
      function rs(t, e, n, r) {
        const s = Es(e);
        s.push(n),
          t.firstCreatePass &&
            (function (t) {
              return t.cleanup || (t.cleanup = []);
            })(t).push(r, s.length - 1);
      }
      function ss(t, e, n) {
        for (let r in t)
          if (t.hasOwnProperty(r)) {
            const s = t[r];
            (n = null === n ? {} : n).hasOwnProperty(r)
              ? n[r].push(e, s)
              : (n[r] = [e, s]);
          }
        return n;
      }
      function is(t, e, n, r, s, i, o, a) {
        const l = xe(e, n);
        let c,
          u = e.inputs;
        var h;
        !a && null != u && (c = u[r])
          ? (As(t, n, c, r, s),
            me(e) &&
              (function (t, e) {
                const n = Se(e, t);
                16 & n[2] || (n[2] |= 64);
              })(n, e.index))
          : 3 & e.type &&
            ((r =
              "class" === (h = r)
                ? "className"
                : "for" === h
                ? "htmlFor"
                : "formaction" === h
                ? "formAction"
                : "innerHtml" === h
                ? "innerHTML"
                : "readonly" === h
                ? "readOnly"
                : "tabindex" === h
                ? "tabIndex"
                : h),
            (s = null != o ? o(s, e.value || "", r) : s),
            _e(i)
              ? i.setProperty(l, r, s)
              : In(r) || (l.setProperty ? l.setProperty(r, s) : (l[r] = s)));
      }
      function os(t, e, n, r) {
        let s = !1;
        if (Pe()) {
          const i = (function (t, e, n) {
              const r = t.directiveRegistry;
              let s = null;
              if (r)
                for (let i = 0; i < r.length; i++) {
                  const o = r[i];
                  Fr(n, o.selectors, !1) &&
                    (s || (s = []),
                    qn(Fn(n, e), t, o.type),
                    ye(o) ? (cs(t, n), s.unshift(o)) : s.push(o));
                }
              return s;
            })(t, e, n),
            o = null === r ? null : { "": -1 };
          if (null !== i) {
            (s = !0), hs(n, t.data.length, i.length);
            for (let t = 0; t < i.length; t++) {
              const e = i[t];
              e.providersResolver && e.providersResolver(e);
            }
            let r = !1,
              a = !1,
              l = Zr(t, e, i.length, null);
            for (let s = 0; s < i.length; s++) {
              const c = i[s];
              (n.mergedAttrs = Rn(n.mergedAttrs, c.hostAttrs)),
                ds(t, n, e, l, c),
                us(l, c, o),
                null !== c.contentQueries && (n.flags |= 8),
                (null === c.hostBindings &&
                  null === c.hostAttrs &&
                  0 === c.hostVars) ||
                  (n.flags |= 128);
              const u = c.type.prototype;
              !r &&
                (u.ngOnChanges || u.ngOnInit || u.ngDoCheck) &&
                ((t.preOrderHooks || (t.preOrderHooks = [])).push(n.index),
                (r = !0)),
                a ||
                  (!u.ngOnChanges && !u.ngDoCheck) ||
                  ((t.preOrderCheckHooks || (t.preOrderCheckHooks = [])).push(
                    n.index
                  ),
                  (a = !0)),
                l++;
            }
            !(function (t, e) {
              const n = e.directiveEnd,
                r = t.data,
                s = e.attrs,
                i = [];
              let o = null,
                a = null;
              for (let l = e.directiveStart; l < n; l++) {
                const t = r[l],
                  n = t.inputs,
                  c = null === s || Nr(e) ? null : gs(n, s);
                i.push(c), (o = ss(n, l, o)), (a = ss(t.outputs, l, a));
              }
              null !== o &&
                (o.hasOwnProperty("class") && (e.flags |= 16),
                o.hasOwnProperty("style") && (e.flags |= 32)),
                (e.initialInputs = i),
                (e.inputs = o),
                (e.outputs = a);
            })(t, n);
          }
          o &&
            (function (t, e, n) {
              if (e) {
                const r = (t.localNames = []);
                for (let t = 0; t < e.length; t += 2) {
                  const s = n[e[t + 1]];
                  if (null == s)
                    throw new pn(
                      "301",
                      `Export of name '${e[t + 1]}' not found!`
                    );
                  r.push(e[t], s);
                }
              }
            })(n, r, o);
        }
        return (n.mergedAttrs = Rn(n.mergedAttrs, n.attrs)), s;
      }
      function as(t, e, n, r, s, i) {
        const o = i.hostBindings;
        if (o) {
          let n = t.hostBindingOpCodes;
          null === n && (n = t.hostBindingOpCodes = []);
          const i = ~e.index;
          (function (t) {
            let e = t.length;
            for (; e > 0; ) {
              const n = t[--e];
              if ("number" == typeof n && n < 0) return n;
            }
            return 0;
          })(n) != i && n.push(i),
            n.push(r, s, o);
        }
      }
      function ls(t, e) {
        null !== t.hostBindings && t.hostBindings(1, e);
      }
      function cs(t, e) {
        (e.flags |= 2), (t.components || (t.components = [])).push(e.index);
      }
      function us(t, e, n) {
        if (n) {
          if (e.exportAs)
            for (let r = 0; r < e.exportAs.length; r++) n[e.exportAs[r]] = t;
          ye(e) && (n[""] = t);
        }
      }
      function hs(t, e, n) {
        (t.flags |= 1),
          (t.directiveStart = e),
          (t.directiveEnd = e + n),
          (t.providerIndexes = e);
      }
      function ds(t, e, n, r, s) {
        t.data[r] = s;
        const i = s.factory || (s.factory = dn(s.type)),
          o = new Tn(i, ye(s), null);
        (t.blueprint[r] = o),
          (n[r] = o),
          as(t, e, 0, r, Zr(t, n, s.hostVars, $r), s);
      }
      function ps(t, e, n) {
        const r = xe(e, t),
          s = es(n),
          i = t[10],
          o = bs(
            t,
            Wr(
              t,
              s,
              null,
              n.onPush ? 64 : 16,
              r,
              e,
              i,
              i.createRenderer(r, n),
              null,
              null
            )
          );
        t[e.index] = o;
      }
      function fs(t, e, n, r, s, i) {
        const o = i[e];
        if (null !== o) {
          const t = r.setInput;
          for (let e = 0; e < o.length; ) {
            const s = o[e++],
              i = o[e++],
              a = o[e++];
            null !== t ? r.setInput(n, a, s, i) : (n[i] = a);
          }
        }
      }
      function gs(t, e) {
        let n = null,
          r = 0;
        for (; r < e.length; ) {
          const s = e[r];
          if (0 !== s)
            if (5 !== s) {
              if ("number" == typeof s) break;
              t.hasOwnProperty(s) &&
                (null === n && (n = []), n.push(s, t[s], e[r + 1])),
                (r += 2);
            } else r += 2;
          else r += 4;
        }
        return n;
      }
      function ms(t, e, n, r) {
        return new Array(t, !0, !1, e, null, 0, r, n, null, null);
      }
      function vs(t, e) {
        const n = Se(e, t);
        if (Te(n)) {
          const t = n[1];
          80 & n[2] ? Jr(t, n, t.template, n[8]) : n[5] > 0 && ys(n);
        }
      }
      function ys(t) {
        for (let n = hr(t); null !== n; n = dr(n))
          for (let t = 10; t < n.length; t++) {
            const e = n[t];
            if (1024 & e[2]) {
              const t = e[1];
              Jr(t, e, t.template, e[8]);
            } else e[5] > 0 && ys(e);
          }
        const e = t[1].components;
        if (null !== e)
          for (let n = 0; n < e.length; n++) {
            const r = Se(e[n], t);
            Te(r) && r[5] > 0 && ys(r);
          }
      }
      function _s(t, e) {
        const n = Se(e, t),
          r = n[1];
        !(function (t, e) {
          for (let n = e.length; n < t.blueprint.length; n++)
            e.push(t.blueprint[n]);
        })(r, n),
          Qr(r, n, n[8]);
      }
      function bs(t, e) {
        return t[13] ? (t[14][4] = e) : (t[13] = e), (t[14] = e), e;
      }
      function ws(t) {
        for (; t; ) {
          t[2] |= 64;
          const e = ur(t);
          if (0 != (512 & t[2]) && !e) return t;
          t = e;
        }
        return null;
      }
      function xs(t, e, n) {
        const r = e[10];
        r.begin && r.begin();
        try {
          Jr(t, e, t.template, n);
        } catch (s) {
          throw (Ts(e, s), s);
        } finally {
          r.end && r.end();
        }
      }
      function Cs(t) {
        !(function (t) {
          for (let e = 0; e < t.components.length; e++) {
            const n = t.components[e],
              r = ke(n),
              s = r[1];
            Yr(s, r, s.template, n);
          }
        })(t[8]);
      }
      function Ss(t, e, n) {
        Be(0), e(t, n);
      }
      const ks = (() => Promise.resolve(null))();
      function Es(t) {
        return t[7] || (t[7] = []);
      }
      function Ts(t, e) {
        const n = t[9],
          r = n ? n.get(sr, null) : null;
        r && r.handleError(e);
      }
      function As(t, e, n, r, s) {
        for (let i = 0; i < n.length; ) {
          const o = n[i++],
            a = n[i++],
            l = e[o],
            c = t.data[o];
          null !== c.setInput ? c.setInput(l, s, r, a) : (l[a] = s);
        }
      }
      function Os(t, e, n) {
        let r = n ? t.styles : null,
          s = n ? t.classes : null,
          i = 0;
        if (null !== e)
          for (let o = 0; o < e.length; o++) {
            const t = e[o];
            "number" == typeof t
              ? (i = t)
              : 1 == i
              ? (s = it(s, t))
              : 2 == i && (r = it(r, t + ": " + e[++o] + ";"));
          }
        n ? (t.styles = r) : (t.stylesWithoutHost = r),
          n ? (t.classes = s) : (t.classesWithoutHost = s);
      }
      const Is = new mt("INJECTOR", -1);
      class Rs {
        get(t, e = se) {
          if (e === se) {
            const e = new Error(`NullInjectorError: No provider for ${st(t)}!`);
            throw ((e.name = "NullInjectorError"), e);
          }
          return e;
        }
      }
      const Ps = new mt("Set Injector scope."),
        js = {},
        Ns = {},
        Ms = [];
      let Us = void 0;
      function Ds() {
        return void 0 === Us && (Us = new Rs()), Us;
      }
      function Ls(t, e = null, n = null, r) {
        return new Fs(t, n, e || Ds(), r);
      }
      class Fs {
        constructor(t, e, n, r = null) {
          (this.parent = n),
            (this.records = new Map()),
            (this.injectorDefTypes = new Set()),
            (this.onDestroy = new Set()),
            (this._destroyed = !1);
          const s = [];
          e && Ot(e, (n) => this.processProvider(n, t, e)),
            Ot([t], (t) => this.processInjectorType(t, [], s)),
            this.records.set(Is, Vs(void 0, this));
          const i = this.records.get(Ps);
          (this.scope = null != i ? i.value : null),
            (this.source = r || ("object" == typeof t ? null : st(t)));
        }
        get destroyed() {
          return this._destroyed;
        }
        destroy() {
          this.assertNotDestroyed(), (this._destroyed = !0);
          try {
            this.onDestroy.forEach((t) => t.ngOnDestroy());
          } finally {
            this.records.clear(),
              this.onDestroy.clear(),
              this.injectorDefTypes.clear();
          }
        }
        get(t, e = se, n = te.Default) {
          this.assertNotDestroyed();
          const r = le(this);
          try {
            if (!(n & te.SkipSelf)) {
              let e = this.records.get(t);
              if (void 0 === e) {
                const n =
                  ("function" == typeof (s = t) ||
                    ("object" == typeof s && s instanceof mt)) &&
                  ct(t);
                (e = n && this.injectableDefInScope(n) ? Vs(Hs(t), js) : null),
                  this.records.set(t, e);
              }
              if (null != e) return this.hydrate(t, e);
            }
            return (n & te.Self ? Ds() : this.parent).get(
              t,
              (e = n & te.Optional && e === se ? null : e)
            );
          } catch (i) {
            if ("NullInjectorError" === i.name) {
              if (
                ((i.ngTempTokenPath = i.ngTempTokenPath || []).unshift(st(t)),
                r)
              )
                throw i;
              return (function (t, e, n, r) {
                const s = t.ngTempTokenPath;
                throw (
                  (e.__source && s.unshift(e.__source),
                  (t.message = (function (t, e, n, r = null) {
                    t =
                      t && "\n" === t.charAt(0) && "\u0275" == t.charAt(1)
                        ? t.substr(2)
                        : t;
                    let s = st(e);
                    if (Array.isArray(e)) s = e.map(st).join(" -> ");
                    else if ("object" == typeof e) {
                      let t = [];
                      for (let n in e)
                        if (e.hasOwnProperty(n)) {
                          let r = e[n];
                          t.push(
                            n +
                              ":" +
                              ("string" == typeof r ? JSON.stringify(r) : st(r))
                          );
                        }
                      s = `{${t.join(", ")}}`;
                    }
                    return `${n}${r ? "(" + r + ")" : ""}[${s}]: ${t.replace(
                      ie,
                      "\n  "
                    )}`;
                  })("\n" + t.message, s, n, r)),
                  (t.ngTokenPath = s),
                  (t.ngTempTokenPath = null),
                  t)
                );
              })(i, t, "R3InjectorError", this.source);
            }
            throw i;
          } finally {
            le(r);
          }
          var s;
        }
        _resolveInjectorDefTypes() {
          this.injectorDefTypes.forEach((t) => this.get(t));
        }
        toString() {
          const t = [];
          return (
            this.records.forEach((e, n) => t.push(st(n))),
            `R3Injector[${t.join(", ")}]`
          );
        }
        assertNotDestroyed() {
          if (this._destroyed)
            throw new Error("Injector has already been destroyed.");
        }
        processInjectorType(t, e, n) {
          if (!(t = Et(t))) return !1;
          let r = ht(t);
          const s = (null == r && t.ngModule) || void 0,
            i = void 0 === s ? t : s,
            o = -1 !== n.indexOf(i);
          if ((void 0 !== s && (r = ht(s)), null == r)) return !1;
          if (null != r.imports && !o) {
            let t;
            n.push(i);
            try {
              Ot(r.imports, (r) => {
                this.processInjectorType(r, e, n) &&
                  (void 0 === t && (t = []), t.push(r));
              });
            } finally {
            }
            if (void 0 !== t)
              for (let e = 0; e < t.length; e++) {
                const { ngModule: n, providers: r } = t[e];
                Ot(r, (t) => this.processProvider(t, n, r || Ms));
              }
          }
          this.injectorDefTypes.add(i), this.records.set(i, Vs(r.factory, js));
          const a = r.providers;
          if (null != a && !o) {
            const e = t;
            Ot(a, (t) => this.processProvider(t, e, a));
          }
          return void 0 !== s && void 0 !== t.providers;
        }
        processProvider(t, e, n) {
          let r = qs((t = Et(t))) ? t : Et(t && t.provide);
          const s = (function (t, e, n) {
            return $s(t)
              ? Vs(void 0, t.useValue)
              : Vs(
                  (function (t, e, n) {
                    let r = void 0;
                    if (qs(t)) {
                      const e = Et(t);
                      return dn(e) || Hs(e);
                    }
                    if ($s(t)) r = () => Et(t.useValue);
                    else if ((s = t) && s.useFactory)
                      r = () => t.useFactory(...he(t.deps || []));
                    else if (
                      (function (t) {
                        return !(!t || !t.useExisting);
                      })(t)
                    )
                      r = () => ue(Et(t.useExisting));
                    else {
                      const e = Et(t && (t.useClass || t.provide));
                      if (
                        !(function (t) {
                          return !!t.deps;
                        })(t)
                      )
                        return dn(e) || Hs(e);
                      r = () => new e(...he(t.deps));
                    }
                    var s;
                    return r;
                  })(t),
                  js
                );
          })(t);
          if (qs(t) || !0 !== t.multi) this.records.get(r);
          else {
            let e = this.records.get(r);
            e ||
              ((e = Vs(void 0, js, !0)),
              (e.factory = () => he(e.multi)),
              this.records.set(r, e)),
              (r = t),
              e.multi.push(t);
          }
          this.records.set(r, s);
        }
        hydrate(t, e) {
          var n;
          return (
            e.value === js && ((e.value = Ns), (e.value = e.factory())),
            "object" == typeof e.value &&
              e.value &&
              null !== (n = e.value) &&
              "object" == typeof n &&
              "function" == typeof n.ngOnDestroy &&
              this.onDestroy.add(e.value),
            e.value
          );
        }
        injectableDefInScope(t) {
          return (
            !!t.providedIn &&
            ("string" == typeof t.providedIn
              ? "any" === t.providedIn || t.providedIn === this.scope
              : this.injectorDefTypes.has(t.providedIn))
          );
        }
      }
      function Hs(t) {
        const e = ct(t),
          n = null !== e ? e.factory : dn(t);
        if (null !== n) return n;
        const r = ht(t);
        if (null !== r) return r.factory;
        if (t instanceof mt)
          throw new Error(`Token ${st(t)} is missing a \u0275prov definition.`);
        if (t instanceof Function)
          return (function (t) {
            const e = t.length;
            if (e > 0) {
              const n = (function (t, e) {
                const n = [];
                for (let r = 0; r < t; r++) n.push("?");
                return n;
              })(e);
              throw new Error(
                `Can't resolve all parameters for ${st(t)}: (${n.join(", ")}).`
              );
            }
            const n = (function (t) {
              const e = t && (t[dt] || t[ft]);
              if (e) {
                const n = (function (t) {
                  if (t.hasOwnProperty("name")) return t.name;
                  const e = ("" + t).match(/^function\s*([^\s(]+)/);
                  return null === e ? "" : e[1];
                })(t);
                return (
                  console.warn(
                    `DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`
                  ),
                  e
                );
              }
              return null;
            })(t);
            return null !== n ? () => n.factory(t) : () => new t();
          })(t);
        throw new Error("unreachable");
      }
      function Vs(t, e, n = !1) {
        return { factory: t, value: e, multi: n ? [] : void 0 };
      }
      function $s(t) {
        return null !== t && "object" == typeof t && oe in t;
      }
      function qs(t) {
        return "function" == typeof t;
      }
      const zs = function (t, e, n) {
        return (function (t, e = null, n = null, r) {
          const s = Ls(t, e, n, r);
          return s._resolveInjectorDefTypes(), s;
        })({ name: n }, e, t, n);
      };
      let Bs = (() => {
        class t {
          static create(t, e) {
            return Array.isArray(t)
              ? zs(t, e, "")
              : zs(t.providers, t.parent, t.name || "");
          }
        }
        return (
          (t.THROW_IF_NOT_FOUND = se),
          (t.NULL = new Rs()),
          (t.ɵprov = at({
            token: t,
            providedIn: "any",
            factory: () => ue(Is),
          })),
          (t.__NG_ELEMENT_ID__ = -1),
          t
        );
      })();
      function Ws(t, e) {
        wn(ke(t)[1], Me());
      }
      let Gs = null;
      function Zs() {
        if (!Gs) {
          const t = Ct.Symbol;
          if (t && t.iterator) Gs = t.iterator;
          else {
            const t = Object.getOwnPropertyNames(Map.prototype);
            for (let e = 0; e < t.length; ++e) {
              const n = t[e];
              "entries" !== n &&
                "size" !== n &&
                Map.prototype[n] === Map.prototype.entries &&
                (Gs = n);
            }
          }
        }
        return Gs;
      }
      function Qs(t) {
        return (
          !!Js(t) && (Array.isArray(t) || (!(t instanceof Map) && Zs() in t))
        );
      }
      function Js(t) {
        return null !== t && ("function" == typeof t || "object" == typeof t);
      }
      function Ys(t, e, n) {
        return !Object.is(t[e], n) && ((t[e] = n), !0);
      }
      function Ks(t, e, n, r) {
        const s = je();
        return (
          Ys(s, Ve(), e) &&
            (Ne(),
            (function (t, e, n, r, s, i) {
              const o = xe(t, e);
              !(function (t, e, n, r, s, i, o) {
                if (null == i)
                  _e(t) ? t.removeAttribute(e, s, n) : e.removeAttribute(s);
                else {
                  const a = null == o ? Kt(i) : o(i, r || "", s);
                  _e(t)
                    ? t.setAttribute(e, s, a, n)
                    : n
                    ? e.setAttributeNS(n, s, a)
                    : e.setAttribute(s, a);
                }
              })(e[11], o, i, t.value, n, r, s);
            })(nn(), s, t, e, n, r)),
          Ks
        );
      }
      function Xs(t, e, n, r, s, i, o, a) {
        const l = je(),
          c = Ne(),
          u = t + 20,
          h = c.firstCreatePass
            ? (function (t, e, n, r, s, i, o, a, l) {
                const c = e.consts,
                  u = Gr(e, t, 4, o || null, Ae(c, a));
                os(e, n, u, Ae(c, l)), wn(e, u);
                const h = (u.tViews = ns(
                  2,
                  u,
                  r,
                  s,
                  i,
                  e.directiveRegistry,
                  e.pipeRegistry,
                  null,
                  e.schemas,
                  c
                ));
                return (
                  null !== e.queries &&
                    (e.queries.template(e, u),
                    (h.queries = e.queries.embeddedTView(u))),
                  u
                );
              })(u, c, l, e, n, r, s, i, o)
            : c.data[u];
        De(h, !1);
        const d = l[11].createComment("");
        Sr(c, l, d, h),
          ir(d, l),
          bs(l, (l[u] = ms(d, l, d, h))),
          ve(h) && Xr(c, l, h),
          null != o && ts(l, h, a);
      }
      function ti(t, e = te.Default) {
        const n = je();
        return null === n ? ue(t, e) : Wn(Me(), n, Et(t), e);
      }
      function ei(t) {
        return (function (t, e) {
          if ("class" === e) return t.classes;
          if ("style" === e) return t.styles;
          const n = t.attrs;
          if (n) {
            const t = n.length;
            let r = 0;
            for (; r < t; ) {
              const s = n[r];
              if (On(s)) break;
              if (0 === s) r += 2;
              else if ("number" == typeof s)
                for (r++; r < t && "string" == typeof n[r]; ) r++;
              else {
                if (s === e) return n[r + 1];
                r += 2;
              }
            }
          }
          return null;
        })(Me(), t);
      }
      function ni(t, e, n) {
        const r = je();
        return Ys(r, Ve(), e) && is(Ne(), nn(), r, t, e, r[11], n, !1), ni;
      }
      function ri(t, e, n, r, s) {
        const i = s ? "class" : "style";
        As(t, n, e.inputs[i], i, r);
      }
      function si(t, e, n, r) {
        const s = je(),
          i = Ne(),
          o = 20 + t,
          a = s[11],
          l = (s[o] = gr(a, e, Re.lFrame.currentNamespace)),
          c = i.firstCreatePass
            ? (function (t, e, n, r, s, i, o) {
                const a = e.consts,
                  l = Gr(e, t, 2, s, Ae(a, i));
                return (
                  os(e, n, l, Ae(a, o)),
                  null !== l.attrs && Os(l, l.attrs, !1),
                  null !== l.mergedAttrs && Os(l, l.mergedAttrs, !0),
                  null !== e.queries && e.queries.elementStart(e, l),
                  l
                );
              })(o, i, s, 0, e, n, r)
            : i.data[o];
        De(c, !0);
        const u = c.mergedAttrs;
        null !== u && An(a, l, u);
        const h = c.classes;
        null !== h && Rr(a, l, h);
        const d = c.styles;
        null !== d && Ir(a, l, d),
          64 != (64 & c.flags) && Sr(i, s, l, c),
          0 === Re.lFrame.elementDepthCount && ir(l, s),
          Re.lFrame.elementDepthCount++,
          ve(c) &&
            (Xr(i, s, c),
            (function (t, e, n) {
              if (ge(e)) {
                const r = e.directiveEnd;
                for (let s = e.directiveStart; s < r; s++) {
                  const e = t.data[s];
                  e.contentQueries && e.contentQueries(1, n[s], s);
                }
              }
            })(i, c, s)),
          null !== r && ts(s, c);
      }
      function ii() {
        let t = Me();
        Le() ? (Re.lFrame.isParent = !1) : ((t = t.parent), De(t, !1));
        const e = t;
        Re.lFrame.elementDepthCount--;
        const n = Ne();
        n.firstCreatePass && (wn(n, t), ge(t) && n.queries.elementEnd(t)),
          null != e.classesWithoutHost &&
            (function (t) {
              return 0 != (16 & t.flags);
            })(e) &&
            ri(n, e, je(), e.classesWithoutHost, !0),
          null != e.stylesWithoutHost &&
            (function (t) {
              return 0 != (32 & t.flags);
            })(e) &&
            ri(n, e, je(), e.stylesWithoutHost, !1);
      }
      function oi(t, e, n, r) {
        si(t, e, n, r), ii();
      }
      function ai(t) {
        return !!t && "function" == typeof t.then;
      }
      function li(t, e, n = !1, r) {
        const s = je(),
          i = Ne(),
          o = Me();
        return (
          (function (t, e, n, r, s, i, o = !1, a) {
            const l = ve(r),
              c = t.firstCreatePass && (t.cleanup || (t.cleanup = [])),
              u = Es(e);
            let h = !0;
            if (3 & r.type) {
              const d = xe(r, e),
                p = a ? a(d) : jt,
                f = p.target || d,
                g = u.length,
                m = a ? (t) => a(we(t[r.index])).target : r.index;
              if (_e(n)) {
                let o = null;
                if (
                  (!a &&
                    l &&
                    (o = (function (t, e, n, r) {
                      const s = t.cleanup;
                      if (null != s)
                        for (let i = 0; i < s.length - 1; i += 2) {
                          const t = s[i];
                          if (t === n && s[i + 1] === r) {
                            const t = e[7],
                              n = s[i + 2];
                            return t.length > n ? t[n] : null;
                          }
                          "string" == typeof t && (i += 2);
                        }
                      return null;
                    })(t, e, s, r.index)),
                  null !== o)
                )
                  ((o.__ngLastListenerFn__ || o).__ngNextListenerFn__ = i),
                    (o.__ngLastListenerFn__ = i),
                    (h = !1);
                else {
                  i = ui(r, e, i, !1);
                  const t = n.listen(p.name || f, s, i);
                  u.push(i, t), c && c.push(s, m, g, g + 1);
                }
              } else
                (i = ui(r, e, i, !0)),
                  f.addEventListener(s, i, o),
                  u.push(i),
                  c && c.push(s, m, g, o);
            }
            const d = r.outputs;
            let p;
            if (h && null !== d && (p = d[s])) {
              const t = p.length;
              if (t)
                for (let n = 0; n < t; n += 2) {
                  const t = e[p[n]][p[n + 1]].subscribe(i),
                    o = u.length;
                  u.push(i, t), c && c.push(s, r.index, o, -(o + 1));
                }
            }
          })(i, s, s[11], o, t, e, n, r),
          li
        );
      }
      function ci(t, e, n) {
        try {
          return !1 !== e(n);
        } catch (r) {
          return Ts(t, r), !1;
        }
      }
      function ui(t, e, n, r) {
        return function s(i) {
          if (i === Function) return n;
          const o = 2 & t.flags ? Se(t.index, e) : e;
          0 == (32 & e[2]) && ws(o);
          let a = ci(e, n, i),
            l = s.__ngNextListenerFn__;
          for (; l; ) (a = ci(e, l, i) && a), (l = l.__ngNextListenerFn__);
          return r && !1 === a && (i.preventDefault(), (i.returnValue = !1)), a;
        };
      }
      function hi(t, e = "") {
        const n = je(),
          r = Ne(),
          s = t + 20,
          i = r.firstCreatePass ? Gr(r, s, 1, e, null) : r.data[s],
          o = (n[s] = (function (t, e) {
            return _e(t) ? t.createText(e) : t.createTextNode(e);
          })(n[11], e));
        Sr(r, n, o, i), De(i, !1);
      }
      function di(t) {
        return pi("", t, ""), di;
      }
      function pi(t, e, n) {
        const r = je(),
          s = (function (t, e, n, r) {
            return Ys(t, Ve(), n) ? e + Kt(n) + r : $r;
          })(r, t, e, n);
        return (
          s !== $r &&
            (function (t, e, n) {
              const r = (function (t, e) {
                return we(e[t]);
              })(e, t);
              !(function (t, e, n) {
                _e(t) ? t.setValue(e, n) : (e.textContent = n);
              })(t[11], r, n);
            })(r, tn(), s),
          pi
        );
      }
      function fi(t, e, n) {
        const r = je();
        return Ys(r, Ve(), e) && is(Ne(), nn(), r, t, e, r[11], n, !0), fi;
      }
      const gi = void 0;
      var mi = [
        "en",
        [["a", "p"], ["AM", "PM"], gi],
        [["AM", "PM"], gi, gi],
        [
          ["S", "M", "T", "W", "T", "F", "S"],
          ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        ],
        gi,
        [
          ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
          [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
        ],
        gi,
        [
          ["B", "A"],
          ["BC", "AD"],
          ["Before Christ", "Anno Domini"],
        ],
        0,
        [6, 0],
        ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"],
        ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"],
        ["{1}, {0}", gi, "{1} 'at' {0}", gi],
        [
          ".",
          ",",
          ";",
          "%",
          "+",
          "-",
          "E",
          "\xd7",
          "\u2030",
          "\u221e",
          "NaN",
          ":",
        ],
        ["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"],
        "USD",
        "$",
        "US Dollar",
        {},
        "ltr",
        function (t) {
          let e = Math.floor(Math.abs(t)),
            n = t.toString().replace(/^[^.]*\.?/, "").length;
          return 1 === e && 0 === n ? 1 : 5;
        },
      ];
      let vi = {};
      function yi(t) {
        return (
          t in vi ||
            (vi[t] =
              Ct.ng &&
              Ct.ng.common &&
              Ct.ng.common.locales &&
              Ct.ng.common.locales[t]),
          vi[t]
        );
      }
      var _i = (function (t) {
        return (
          (t[(t.LocaleId = 0)] = "LocaleId"),
          (t[(t.DayPeriodsFormat = 1)] = "DayPeriodsFormat"),
          (t[(t.DayPeriodsStandalone = 2)] = "DayPeriodsStandalone"),
          (t[(t.DaysFormat = 3)] = "DaysFormat"),
          (t[(t.DaysStandalone = 4)] = "DaysStandalone"),
          (t[(t.MonthsFormat = 5)] = "MonthsFormat"),
          (t[(t.MonthsStandalone = 6)] = "MonthsStandalone"),
          (t[(t.Eras = 7)] = "Eras"),
          (t[(t.FirstDayOfWeek = 8)] = "FirstDayOfWeek"),
          (t[(t.WeekendRange = 9)] = "WeekendRange"),
          (t[(t.DateFormat = 10)] = "DateFormat"),
          (t[(t.TimeFormat = 11)] = "TimeFormat"),
          (t[(t.DateTimeFormat = 12)] = "DateTimeFormat"),
          (t[(t.NumberSymbols = 13)] = "NumberSymbols"),
          (t[(t.NumberFormats = 14)] = "NumberFormats"),
          (t[(t.CurrencyCode = 15)] = "CurrencyCode"),
          (t[(t.CurrencySymbol = 16)] = "CurrencySymbol"),
          (t[(t.CurrencyName = 17)] = "CurrencyName"),
          (t[(t.Currencies = 18)] = "Currencies"),
          (t[(t.Directionality = 19)] = "Directionality"),
          (t[(t.PluralCase = 20)] = "PluralCase"),
          (t[(t.ExtraData = 21)] = "ExtraData"),
          t
        );
      })({});
      let bi = "en-US";
      function wi(t) {
        var e, n;
        (n = "Expected localeId to be defined"),
          null == (e = t) &&
            (function (t, e, n, r) {
              throw new Error(
                "ASSERTION ERROR: " + t + ` [Expected=> null != ${e} <=Actual]`
              );
            })(n, e),
          "string" == typeof t && (bi = t.toLowerCase().replace(/_/g, "-"));
      }
      class xi {}
      class Ci {
        resolveComponentFactory(t) {
          throw (function (t) {
            const e = Error(
              `No component factory found for ${st(
                t
              )}. Did you add it to @NgModule.entryComponents?`
            );
            return (e.ngComponent = t), e;
          })(t);
        }
      }
      let Si = (() => {
        class t {}
        return (t.NULL = new Ci()), t;
      })();
      function ki(...t) {}
      function Ei(t, e) {
        return new Ai(xe(t, e));
      }
      const Ti = function () {
        return Ei(Me(), je());
      };
      let Ai = (() => {
        class t {
          constructor(t) {
            this.nativeElement = t;
          }
        }
        return (t.__NG_ELEMENT_ID__ = Ti), t;
      })();
      class Oi {}
      let Ii = (() => {
        class t {}
        return (t.__NG_ELEMENT_ID__ = () => Ri()), t;
      })();
      const Ri = function () {
        const t = je(),
          e = Se(Me().index, t);
        return (function (t) {
          return t[11];
        })(pe(e) ? e : t);
      };
      let Pi = (() => {
        class t {}
        return (
          (t.ɵprov = at({ token: t, providedIn: "root", factory: () => null })),
          t
        );
      })();
      class ji {
        constructor(t) {
          (this.full = t),
            (this.major = t.split(".")[0]),
            (this.minor = t.split(".")[1]),
            (this.patch = t.split(".").slice(2).join("."));
        }
      }
      const Ni = new ji("11.0.2");
      class Mi {
        constructor() {}
        supports(t) {
          return Qs(t);
        }
        create(t) {
          return new Di(t);
        }
      }
      const Ui = (t, e) => e;
      class Di {
        constructor(t) {
          (this.length = 0),
            (this._linkedRecords = null),
            (this._unlinkedRecords = null),
            (this._previousItHead = null),
            (this._itHead = null),
            (this._itTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._movesHead = null),
            (this._movesTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null),
            (this._identityChangesHead = null),
            (this._identityChangesTail = null),
            (this._trackByFn = t || Ui);
        }
        forEachItem(t) {
          let e;
          for (e = this._itHead; null !== e; e = e._next) t(e);
        }
        forEachOperation(t) {
          let e = this._itHead,
            n = this._removalsHead,
            r = 0,
            s = null;
          for (; e || n; ) {
            const i = !n || (e && e.currentIndex < Vi(n, r, s)) ? e : n,
              o = Vi(i, r, s),
              a = i.currentIndex;
            if (i === n) r--, (n = n._nextRemoved);
            else if (((e = e._next), null == i.previousIndex)) r++;
            else {
              s || (s = []);
              const t = o - r,
                e = a - r;
              if (t != e) {
                for (let n = 0; n < t; n++) {
                  const r = n < s.length ? s[n] : (s[n] = 0),
                    i = r + n;
                  e <= i && i < t && (s[n] = r + 1);
                }
                s[i.previousIndex] = e - t;
              }
            }
            o !== a && t(i, o, a);
          }
        }
        forEachPreviousItem(t) {
          let e;
          for (e = this._previousItHead; null !== e; e = e._nextPrevious) t(e);
        }
        forEachAddedItem(t) {
          let e;
          for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e);
        }
        forEachMovedItem(t) {
          let e;
          for (e = this._movesHead; null !== e; e = e._nextMoved) t(e);
        }
        forEachRemovedItem(t) {
          let e;
          for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e);
        }
        forEachIdentityChange(t) {
          let e;
          for (
            e = this._identityChangesHead;
            null !== e;
            e = e._nextIdentityChange
          )
            t(e);
        }
        diff(t) {
          if ((null == t && (t = []), !Qs(t)))
            throw new Error(
              `Error trying to diff '${st(
                t
              )}'. Only arrays and iterables are allowed`
            );
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let e,
            n,
            r,
            s = this._itHead,
            i = !1;
          if (Array.isArray(t)) {
            this.length = t.length;
            for (let e = 0; e < this.length; e++)
              (n = t[e]),
                (r = this._trackByFn(e, n)),
                null !== s && Object.is(s.trackById, r)
                  ? (i && (s = this._verifyReinsertion(s, n, r, e)),
                    Object.is(s.item, n) || this._addIdentityChange(s, n))
                  : ((s = this._mismatch(s, n, r, e)), (i = !0)),
                (s = s._next);
          } else
            (e = 0),
              (function (t, e) {
                if (Array.isArray(t))
                  for (let n = 0; n < t.length; n++) e(t[n]);
                else {
                  const n = t[Zs()]();
                  let r;
                  for (; !(r = n.next()).done; ) e(r.value);
                }
              })(t, (t) => {
                (r = this._trackByFn(e, t)),
                  null !== s && Object.is(s.trackById, r)
                    ? (i && (s = this._verifyReinsertion(s, t, r, e)),
                      Object.is(s.item, t) || this._addIdentityChange(s, t))
                    : ((s = this._mismatch(s, t, r, e)), (i = !0)),
                  (s = s._next),
                  e++;
              }),
              (this.length = e);
          return this._truncate(s), (this.collection = t), this.isDirty;
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._movesHead ||
            null !== this._removalsHead ||
            null !== this._identityChangesHead
          );
        }
        _reset() {
          if (this.isDirty) {
            let t;
            for (
              t = this._previousItHead = this._itHead;
              null !== t;
              t = t._next
            )
              t._nextPrevious = t._next;
            for (t = this._additionsHead; null !== t; t = t._nextAdded)
              t.previousIndex = t.currentIndex;
            for (
              this._additionsHead = this._additionsTail = null,
                t = this._movesHead;
              null !== t;
              t = t._nextMoved
            )
              t.previousIndex = t.currentIndex;
            (this._movesHead = this._movesTail = null),
              (this._removalsHead = this._removalsTail = null),
              (this._identityChangesHead = this._identityChangesTail = null);
          }
        }
        _mismatch(t, e, n, r) {
          let s;
          return (
            null === t ? (s = this._itTail) : ((s = t._prev), this._remove(t)),
            null !==
            (t =
              null === this._linkedRecords
                ? null
                : this._linkedRecords.get(n, r))
              ? (Object.is(t.item, e) || this._addIdentityChange(t, e),
                this._moveAfter(t, s, r))
              : null !==
                (t =
                  null === this._unlinkedRecords
                    ? null
                    : this._unlinkedRecords.get(n, null))
              ? (Object.is(t.item, e) || this._addIdentityChange(t, e),
                this._reinsertAfter(t, s, r))
              : (t = this._addAfter(new Li(e, n), s, r)),
            t
          );
        }
        _verifyReinsertion(t, e, n, r) {
          let s =
            null === this._unlinkedRecords
              ? null
              : this._unlinkedRecords.get(n, null);
          return (
            null !== s
              ? (t = this._reinsertAfter(s, t._prev, r))
              : t.currentIndex != r &&
                ((t.currentIndex = r), this._addToMoves(t, r)),
            t
          );
        }
        _truncate(t) {
          for (; null !== t; ) {
            const e = t._next;
            this._addToRemovals(this._unlink(t)), (t = e);
          }
          null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
            null !== this._additionsTail &&
              (this._additionsTail._nextAdded = null),
            null !== this._movesTail && (this._movesTail._nextMoved = null),
            null !== this._itTail && (this._itTail._next = null),
            null !== this._removalsTail &&
              (this._removalsTail._nextRemoved = null),
            null !== this._identityChangesTail &&
              (this._identityChangesTail._nextIdentityChange = null);
        }
        _reinsertAfter(t, e, n) {
          null !== this._unlinkedRecords && this._unlinkedRecords.remove(t);
          const r = t._prevRemoved,
            s = t._nextRemoved;
          return (
            null === r ? (this._removalsHead = s) : (r._nextRemoved = s),
            null === s ? (this._removalsTail = r) : (s._prevRemoved = r),
            this._insertAfter(t, e, n),
            this._addToMoves(t, n),
            t
          );
        }
        _moveAfter(t, e, n) {
          return (
            this._unlink(t),
            this._insertAfter(t, e, n),
            this._addToMoves(t, n),
            t
          );
        }
        _addAfter(t, e, n) {
          return (
            this._insertAfter(t, e, n),
            (this._additionsTail =
              null === this._additionsTail
                ? (this._additionsHead = t)
                : (this._additionsTail._nextAdded = t)),
            t
          );
        }
        _insertAfter(t, e, n) {
          const r = null === e ? this._itHead : e._next;
          return (
            (t._next = r),
            (t._prev = e),
            null === r ? (this._itTail = t) : (r._prev = t),
            null === e ? (this._itHead = t) : (e._next = t),
            null === this._linkedRecords && (this._linkedRecords = new Hi()),
            this._linkedRecords.put(t),
            (t.currentIndex = n),
            t
          );
        }
        _remove(t) {
          return this._addToRemovals(this._unlink(t));
        }
        _unlink(t) {
          null !== this._linkedRecords && this._linkedRecords.remove(t);
          const e = t._prev,
            n = t._next;
          return (
            null === e ? (this._itHead = n) : (e._next = n),
            null === n ? (this._itTail = e) : (n._prev = e),
            t
          );
        }
        _addToMoves(t, e) {
          return (
            t.previousIndex === e ||
              (this._movesTail =
                null === this._movesTail
                  ? (this._movesHead = t)
                  : (this._movesTail._nextMoved = t)),
            t
          );
        }
        _addToRemovals(t) {
          return (
            null === this._unlinkedRecords &&
              (this._unlinkedRecords = new Hi()),
            this._unlinkedRecords.put(t),
            (t.currentIndex = null),
            (t._nextRemoved = null),
            null === this._removalsTail
              ? ((this._removalsTail = this._removalsHead = t),
                (t._prevRemoved = null))
              : ((t._prevRemoved = this._removalsTail),
                (this._removalsTail = this._removalsTail._nextRemoved = t)),
            t
          );
        }
        _addIdentityChange(t, e) {
          return (
            (t.item = e),
            (this._identityChangesTail =
              null === this._identityChangesTail
                ? (this._identityChangesHead = t)
                : (this._identityChangesTail._nextIdentityChange = t)),
            t
          );
        }
      }
      class Li {
        constructor(t, e) {
          (this.item = t),
            (this.trackById = e),
            (this.currentIndex = null),
            (this.previousIndex = null),
            (this._nextPrevious = null),
            (this._prev = null),
            (this._next = null),
            (this._prevDup = null),
            (this._nextDup = null),
            (this._prevRemoved = null),
            (this._nextRemoved = null),
            (this._nextAdded = null),
            (this._nextMoved = null),
            (this._nextIdentityChange = null);
        }
      }
      class Fi {
        constructor() {
          (this._head = null), (this._tail = null);
        }
        add(t) {
          null === this._head
            ? ((this._head = this._tail = t),
              (t._nextDup = null),
              (t._prevDup = null))
            : ((this._tail._nextDup = t),
              (t._prevDup = this._tail),
              (t._nextDup = null),
              (this._tail = t));
        }
        get(t, e) {
          let n;
          for (n = this._head; null !== n; n = n._nextDup)
            if (
              (null === e || e <= n.currentIndex) &&
              Object.is(n.trackById, t)
            )
              return n;
          return null;
        }
        remove(t) {
          const e = t._prevDup,
            n = t._nextDup;
          return (
            null === e ? (this._head = n) : (e._nextDup = n),
            null === n ? (this._tail = e) : (n._prevDup = e),
            null === this._head
          );
        }
      }
      class Hi {
        constructor() {
          this.map = new Map();
        }
        put(t) {
          const e = t.trackById;
          let n = this.map.get(e);
          n || ((n = new Fi()), this.map.set(e, n)), n.add(t);
        }
        get(t, e) {
          const n = this.map.get(t);
          return n ? n.get(t, e) : null;
        }
        remove(t) {
          const e = t.trackById;
          return this.map.get(e).remove(t) && this.map.delete(e), t;
        }
        get isEmpty() {
          return 0 === this.map.size;
        }
        clear() {
          this.map.clear();
        }
      }
      function Vi(t, e, n) {
        const r = t.previousIndex;
        if (null === r) return r;
        let s = 0;
        return n && r < n.length && (s = n[r]), r + e + s;
      }
      class $i {
        constructor() {}
        supports(t) {
          return t instanceof Map || Js(t);
        }
        create() {
          return new qi();
        }
      }
      class qi {
        constructor() {
          (this._records = new Map()),
            (this._mapHead = null),
            (this._appendAfter = null),
            (this._previousMapHead = null),
            (this._changesHead = null),
            (this._changesTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null);
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._changesHead ||
            null !== this._removalsHead
          );
        }
        forEachItem(t) {
          let e;
          for (e = this._mapHead; null !== e; e = e._next) t(e);
        }
        forEachPreviousItem(t) {
          let e;
          for (e = this._previousMapHead; null !== e; e = e._nextPrevious) t(e);
        }
        forEachChangedItem(t) {
          let e;
          for (e = this._changesHead; null !== e; e = e._nextChanged) t(e);
        }
        forEachAddedItem(t) {
          let e;
          for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e);
        }
        forEachRemovedItem(t) {
          let e;
          for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e);
        }
        diff(t) {
          if (t) {
            if (!(t instanceof Map || Js(t)))
              throw new Error(
                `Error trying to diff '${st(
                  t
                )}'. Only maps and objects are allowed`
              );
          } else t = new Map();
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let e = this._mapHead;
          if (
            ((this._appendAfter = null),
            this._forEach(t, (t, n) => {
              if (e && e.key === n)
                this._maybeAddToChanges(e, t),
                  (this._appendAfter = e),
                  (e = e._next);
              else {
                const r = this._getOrCreateRecordForKey(n, t);
                e = this._insertBeforeOrAppend(e, r);
              }
            }),
            e)
          ) {
            e._prev && (e._prev._next = null), (this._removalsHead = e);
            for (let t = e; null !== t; t = t._nextRemoved)
              t === this._mapHead && (this._mapHead = null),
                this._records.delete(t.key),
                (t._nextRemoved = t._next),
                (t.previousValue = t.currentValue),
                (t.currentValue = null),
                (t._prev = null),
                (t._next = null);
          }
          return (
            this._changesTail && (this._changesTail._nextChanged = null),
            this._additionsTail && (this._additionsTail._nextAdded = null),
            this.isDirty
          );
        }
        _insertBeforeOrAppend(t, e) {
          if (t) {
            const n = t._prev;
            return (
              (e._next = t),
              (e._prev = n),
              (t._prev = e),
              n && (n._next = e),
              t === this._mapHead && (this._mapHead = e),
              (this._appendAfter = t),
              t
            );
          }
          return (
            this._appendAfter
              ? ((this._appendAfter._next = e), (e._prev = this._appendAfter))
              : (this._mapHead = e),
            (this._appendAfter = e),
            null
          );
        }
        _getOrCreateRecordForKey(t, e) {
          if (this._records.has(t)) {
            const n = this._records.get(t);
            this._maybeAddToChanges(n, e);
            const r = n._prev,
              s = n._next;
            return (
              r && (r._next = s),
              s && (s._prev = r),
              (n._next = null),
              (n._prev = null),
              n
            );
          }
          const n = new zi(t);
          return (
            this._records.set(t, n),
            (n.currentValue = e),
            this._addToAdditions(n),
            n
          );
        }
        _reset() {
          if (this.isDirty) {
            let t;
            for (
              this._previousMapHead = this._mapHead, t = this._previousMapHead;
              null !== t;
              t = t._next
            )
              t._nextPrevious = t._next;
            for (t = this._changesHead; null !== t; t = t._nextChanged)
              t.previousValue = t.currentValue;
            for (t = this._additionsHead; null != t; t = t._nextAdded)
              t.previousValue = t.currentValue;
            (this._changesHead = this._changesTail = null),
              (this._additionsHead = this._additionsTail = null),
              (this._removalsHead = null);
          }
        }
        _maybeAddToChanges(t, e) {
          Object.is(e, t.currentValue) ||
            ((t.previousValue = t.currentValue),
            (t.currentValue = e),
            this._addToChanges(t));
        }
        _addToAdditions(t) {
          null === this._additionsHead
            ? (this._additionsHead = this._additionsTail = t)
            : ((this._additionsTail._nextAdded = t), (this._additionsTail = t));
        }
        _addToChanges(t) {
          null === this._changesHead
            ? (this._changesHead = this._changesTail = t)
            : ((this._changesTail._nextChanged = t), (this._changesTail = t));
        }
        _forEach(t, e) {
          t instanceof Map
            ? t.forEach(e)
            : Object.keys(t).forEach((n) => e(t[n], n));
        }
      }
      class zi {
        constructor(t) {
          (this.key = t),
            (this.previousValue = null),
            (this.currentValue = null),
            (this._nextPrevious = null),
            (this._next = null),
            (this._prev = null),
            (this._nextAdded = null),
            (this._nextRemoved = null),
            (this._nextChanged = null);
        }
      }
      let Bi = (() => {
          class t {
            constructor(t) {
              this.factories = t;
            }
            static create(e, n) {
              if (null != n) {
                const t = n.factories.slice();
                e = e.concat(t);
              }
              return new t(e);
            }
            static extend(e) {
              return {
                provide: t,
                useFactory: (n) => {
                  if (!n)
                    throw new Error(
                      "Cannot extend IterableDiffers without a parent injector"
                    );
                  return t.create(e, n);
                },
                deps: [[t, new rt(), new et()]],
              };
            }
            find(t) {
              const e = this.factories.find((e) => e.supports(t));
              if (null != e) return e;
              throw new Error(
                `Cannot find a differ supporting object '${t}' of type '${
                  ((n = t), n.name || typeof n)
                }'`
              );
              var n;
            }
          }
          return (
            (t.ɵprov = at({
              token: t,
              providedIn: "root",
              factory: () => new t([new Mi()]),
            })),
            t
          );
        })(),
        Wi = (() => {
          class t {
            constructor(t) {
              this.factories = t;
            }
            static create(e, n) {
              if (n) {
                const t = n.factories.slice();
                e = e.concat(t);
              }
              return new t(e);
            }
            static extend(e) {
              return {
                provide: t,
                useFactory: (n) => {
                  if (!n)
                    throw new Error(
                      "Cannot extend KeyValueDiffers without a parent injector"
                    );
                  return t.create(e, n);
                },
                deps: [[t, new rt(), new et()]],
              };
            }
            find(t) {
              const e = this.factories.find((e) => e.supports(t));
              if (e) return e;
              throw new Error(`Cannot find a differ supporting object '${t}'`);
            }
          }
          return (
            (t.ɵprov = at({
              token: t,
              providedIn: "root",
              factory: () => new t([new $i()]),
            })),
            t
          );
        })();
      function Gi(t, e, n, r, s = !1) {
        for (; null !== n; ) {
          const i = e[n.index];
          if ((null !== i && r.push(we(i)), fe(i)))
            for (let t = 10; t < i.length; t++) {
              const e = i[t],
                n = e[1].firstChild;
              null !== n && Gi(e[1], e, n, r);
            }
          const o = n.type;
          if (8 & o) Gi(t, e, n.child, r);
          else if (32 & o) {
            const t = cr(n, e);
            let s;
            for (; (s = t()); ) r.push(s);
          } else if (16 & o) {
            const t = e[16],
              s = t[6].projection[n.projection];
            if (Array.isArray(s)) r.push(...s);
            else {
              const e = ur(t);
              Gi(e[1], e, s, r, !0);
            }
          }
          n = s ? n.projectionNext : n.next;
        }
        return r;
      }
      class Zi {
        constructor(t, e) {
          (this._lView = t),
            (this._cdRefInjectingView = e),
            (this._appRef = null),
            (this._viewContainerRef = null);
        }
        get rootNodes() {
          const t = this._lView,
            e = t[1];
          return Gi(e, t, e.firstChild, []);
        }
        get context() {
          return this._lView[8];
        }
        get destroyed() {
          return 256 == (256 & this._lView[2]);
        }
        destroy() {
          if (this._appRef) this._appRef.detachView(this);
          else if (this._viewContainerRef) {
            const t = this._viewContainerRef.indexOf(this);
            t > -1 && this._viewContainerRef.detach(t),
              (this._viewContainerRef = null);
          }
          yr(this._lView[1], this._lView);
        }
        onDestroy(t) {
          rs(this._lView[1], this._lView, null, t);
        }
        markForCheck() {
          ws(this._cdRefInjectingView || this._lView);
        }
        detach() {
          this._lView[2] &= -129;
        }
        reattach() {
          this._lView[2] |= 128;
        }
        detectChanges() {
          xs(this._lView[1], this._lView, this.context);
        }
        checkNoChanges() {
          !(function (t, e, n) {
            He(!0);
            try {
              xs(t, e, n);
            } finally {
              He(!1);
            }
          })(this._lView[1], this._lView, this.context);
        }
        attachToViewContainerRef(t) {
          if (this._appRef)
            throw new Error(
              "This view is already attached directly to the ApplicationRef!"
            );
          this._viewContainerRef = t;
        }
        detachFromAppRef() {
          var t;
          (this._appRef = null),
            Ar(this._lView[1], (t = this._lView), t[11], 2, null, null);
        }
        attachToAppRef(t) {
          if (this._viewContainerRef)
            throw new Error(
              "This view is already attached to a ViewContainer!"
            );
          this._appRef = t;
        }
      }
      class Qi extends Zi {
        constructor(t) {
          super(t), (this._view = t);
        }
        detectChanges() {
          Cs(this._view);
        }
        checkNoChanges() {
          !(function (t) {
            He(!0);
            try {
              Cs(t);
            } finally {
              He(!1);
            }
          })(this._view);
        }
        get context() {
          return null;
        }
      }
      const Ji = function (t = !1) {
        return (function (t, e, n) {
          if (!n && me(t)) {
            const n = Se(t.index, e);
            return new Zi(n, n);
          }
          return 47 & t.type ? new Zi(e[16], e) : null;
        })(Me(), je(), t);
      };
      let Yi = (() => {
        class t {}
        return (t.__NG_ELEMENT_ID__ = Ji), (t.__ChangeDetectorRef__ = !0), t;
      })();
      const Ki = [new $i()],
        Xi = new Bi([new Mi()]),
        to = new Wi(Ki),
        eo = function () {
          return io(Me(), je());
        };
      let no = (() => {
        class t {}
        return (t.__NG_ELEMENT_ID__ = eo), t;
      })();
      const ro = no,
        so = class extends ro {
          constructor(t, e, n) {
            super(),
              (this._declarationLView = t),
              (this._declarationTContainer = e),
              (this.elementRef = n);
          }
          createEmbeddedView(t) {
            const e = this._declarationTContainer.tViews,
              n = Wr(
                this._declarationLView,
                e,
                t,
                16,
                null,
                e.declTNode,
                null,
                null,
                null,
                null
              );
            n[17] = this._declarationLView[this._declarationTContainer.index];
            const r = this._declarationLView[19];
            return (
              null !== r && (n[19] = r.createEmbeddedView(e)),
              Qr(e, n, t),
              new Zi(n)
            );
          }
        };
      function io(t, e) {
        return 4 & t.type ? new so(e, t, Ei(t, e)) : null;
      }
      class oo {}
      class ao {}
      const lo = function () {
        return go(Me(), je());
      };
      let co = (() => {
        class t {}
        return (t.__NG_ELEMENT_ID__ = lo), t;
      })();
      const uo = co,
        ho = class extends uo {
          constructor(t, e, n) {
            super(),
              (this._lContainer = t),
              (this._hostTNode = e),
              (this._hostLView = n);
          }
          get element() {
            return Ei(this._hostTNode, this._hostLView);
          }
          get injector() {
            return new tr(this._hostTNode, this._hostLView);
          }
          get parentInjector() {
            const t = $n(this._hostTNode, this._hostLView);
            if (jn(t)) {
              const e = Mn(t, this._hostLView),
                n = Nn(t);
              return new tr(e[1].data[n + 8], e);
            }
            return new tr(null, this._hostLView);
          }
          clear() {
            for (; this.length > 0; ) this.remove(this.length - 1);
          }
          get(t) {
            const e = po(this._lContainer);
            return (null !== e && e[t]) || null;
          }
          get length() {
            return this._lContainer.length - 10;
          }
          createEmbeddedView(t, e, n) {
            const r = t.createEmbeddedView(e || {});
            return this.insert(r, n), r;
          }
          createComponent(t, e, n, r, s) {
            const i = n || this.parentInjector;
            if (!s && null == t.ngModule && i) {
              const t = i.get(oo, null);
              t && (s = t);
            }
            const o = t.create(i, r, void 0, s);
            return this.insert(o.hostView, e), o;
          }
          insert(t, e) {
            const n = t._lView,
              r = n[1];
            if (fe(n[3])) {
              const e = this.indexOf(t);
              if (-1 !== e) this.detach(e);
              else {
                const e = n[3],
                  r = new ho(e, e[6], e[3]);
                r.detach(r.indexOf(t));
              }
            }
            const s = this._adjustIndex(e),
              i = this._lContainer;
            !(function (t, e, n, r) {
              const s = 10 + r,
                i = n.length;
              r > 0 && (n[s - 1][4] = e),
                r < i - 10
                  ? ((e[4] = n[s]), It(n, 10 + r, e))
                  : (n.push(e), (e[4] = null)),
                (e[3] = n);
              const o = e[17];
              null !== o &&
                n !== o &&
                (function (t, e) {
                  const n = t[9];
                  e[16] !== e[3][3][16] && (t[2] = !0),
                    null === n ? (t[9] = [e]) : n.push(e);
                })(o, e);
              const a = e[19];
              null !== a && a.insertView(t), (e[2] |= 128);
            })(r, n, i, s);
            const o = Er(s, i),
              a = n[11],
              l = Cr(a, i[7]);
            return (
              null !== l &&
                (function (t, e, n, r, s, i) {
                  (r[0] = s), (r[6] = e), Ar(t, r, n, 1, s, i);
                })(r, i[6], a, n, l, o),
              t.attachToViewContainerRef(this),
              It(fo(i), s, t),
              t
            );
          }
          move(t, e) {
            return this.insert(t, e);
          }
          indexOf(t) {
            const e = po(this._lContainer);
            return null !== e ? e.indexOf(t) : -1;
          }
          remove(t) {
            const e = this._adjustIndex(t, -1),
              n = vr(this._lContainer, e);
            n && (Rt(fo(this._lContainer), e), yr(n[1], n));
          }
          detach(t) {
            const e = this._adjustIndex(t, -1),
              n = vr(this._lContainer, e);
            return n && null != Rt(fo(this._lContainer), e) ? new Zi(n) : null;
          }
          _adjustIndex(t, e = 0) {
            return null == t ? this.length + e : t;
          }
        };
      function po(t) {
        return t[8];
      }
      function fo(t) {
        return t[8] || (t[8] = []);
      }
      function go(t, e) {
        let n;
        const r = e[t.index];
        if (fe(r)) n = r;
        else {
          let s;
          if (8 & t.type) s = we(r);
          else {
            const n = e[11];
            s = n.createComment("");
            const r = xe(t, e);
            br(
              n,
              Cr(n, r),
              s,
              (function (t, e) {
                return _e(t) ? t.nextSibling(e) : e.nextSibling;
              })(n, r),
              !1
            );
          }
          (e[t.index] = n = ms(r, e, s, t)), bs(e, n);
        }
        return new ho(n, t, e);
      }
      const mo = {};
      class vo extends Si {
        constructor(t) {
          super(), (this.ngModule = t);
        }
        resolveComponentFactory(t) {
          const e = Jt(t);
          return new bo(e, this.ngModule);
        }
      }
      function yo(t) {
        const e = [];
        for (let n in t)
          t.hasOwnProperty(n) && e.push({ propName: t[n], templateName: n });
        return e;
      }
      const _o = new mt("SCHEDULER_TOKEN", {
        providedIn: "root",
        factory: () => or,
      });
      class bo extends xi {
        constructor(t, e) {
          super(),
            (this.componentDef = t),
            (this.ngModule = e),
            (this.componentType = t.type),
            (this.selector = t.selectors.map(Vr).join(",")),
            (this.ngContentSelectors = t.ngContentSelectors
              ? t.ngContentSelectors
              : []),
            (this.isBoundToModule = !!e);
        }
        get inputs() {
          return yo(this.componentDef.inputs);
        }
        get outputs() {
          return yo(this.componentDef.outputs);
        }
        create(t, e, n, r) {
          const s = (r = r || this.ngModule)
              ? (function (t, e) {
                  return {
                    get: (n, r, s) => {
                      const i = t.get(n, mo, s);
                      return i !== mo || r === mo ? i : e.get(n, r, s);
                    },
                  };
                })(t, r.injector)
              : t,
            i = s.get(Oi, be),
            o = s.get(Pi, null),
            a = i.createRenderer(null, this.componentDef),
            l = this.componentDef.selectors[0][0] || "div",
            c = n
              ? (function (t, e, n) {
                  if (_e(t)) return t.selectRootElement(e, n === Pt.ShadowDom);
                  let r = "string" == typeof e ? t.querySelector(e) : e;
                  return (r.textContent = ""), r;
                })(a, n, this.componentDef.encapsulation)
              : gr(
                  i.createRenderer(null, this.componentDef),
                  l,
                  (function (t) {
                    const e = t.toLowerCase();
                    return "svg" === e
                      ? "http://www.w3.org/2000/svg"
                      : "math" === e
                      ? "http://www.w3.org/1998/MathML/"
                      : null;
                  })(l)
                ),
            u = this.componentDef.onPush ? 576 : 528,
            h = {
              components: [],
              scheduler: or,
              clean: ks,
              playerHandler: null,
              flags: 0,
            },
            d = ns(0, null, null, 1, 0, null, null, null, null, null),
            p = Wr(null, d, h, u, null, null, i, a, o, s);
          let f, g;
          Ze(p);
          try {
            const t = (function (t, e, n, r, s, i) {
              const o = n[1];
              n[20] = t;
              const a = Gr(o, 20, 2, "#host", null),
                l = (a.mergedAttrs = e.hostAttrs);
              null !== l &&
                (Os(a, l, !0),
                null !== t &&
                  (An(s, t, l),
                  null !== a.classes && Rr(s, t, a.classes),
                  null !== a.styles && Ir(s, t, a.styles)));
              const c = r.createRenderer(t, e),
                u = Wr(
                  n,
                  es(e),
                  null,
                  e.onPush ? 64 : 16,
                  n[20],
                  a,
                  r,
                  c,
                  null,
                  null
                );
              return (
                o.firstCreatePass &&
                  (qn(Fn(a, n), o, e.type), cs(o, a), hs(a, n.length, 1)),
                bs(n, u),
                (n[20] = u)
              );
            })(c, this.componentDef, p, i, a);
            if (c)
              if (n) An(a, c, ["ng-version", Ni.full]);
              else {
                const { attrs: t, classes: e } = (function (t) {
                  const e = [],
                    n = [];
                  let r = 1,
                    s = 2;
                  for (; r < t.length; ) {
                    let i = t[r];
                    if ("string" == typeof i)
                      2 === s
                        ? "" !== i && e.push(i, t[++r])
                        : 8 === s && n.push(i);
                    else {
                      if (!Dr(s)) break;
                      s = i;
                    }
                    r++;
                  }
                  return { attrs: e, classes: n };
                })(this.componentDef.selectors[0]);
                t && An(a, c, t), e && e.length > 0 && Rr(a, c, e.join(" "));
              }
            if (((g = Ce(d, 20)), void 0 !== e)) {
              const t = (g.projection = []);
              for (let n = 0; n < this.ngContentSelectors.length; n++) {
                const r = e[n];
                t.push(null != r ? Array.from(r) : null);
              }
            }
            (f = (function (t, e, n, r, s) {
              const i = n[1],
                o = (function (t, e, n) {
                  const r = Me();
                  t.firstCreatePass &&
                    (n.providersResolver && n.providersResolver(n),
                    ds(t, r, e, Zr(t, e, 1, null), n));
                  const s = Yn(e, t, r.directiveStart, r);
                  ir(s, e);
                  const i = xe(r, e);
                  return i && ir(i, e), s;
                })(i, n, e);
              if (
                (r.components.push(o),
                (t[8] = o),
                s && s.forEach((t) => t(o, e)),
                e.contentQueries)
              ) {
                const t = Me();
                e.contentQueries(1, o, t.directiveStart);
              }
              const a = Me();
              return (
                !i.firstCreatePass ||
                  (null === e.hostBindings && null === e.hostAttrs) ||
                  (en(a.index),
                  as(n[1], a, 0, a.directiveStart, a.directiveEnd, e),
                  ls(e, o)),
                o
              );
            })(t, this.componentDef, p, h, [Ws])),
              Qr(d, p, null);
          } finally {
            Xe();
          }
          return new wo(this.componentType, f, Ei(g, p), p, g);
        }
      }
      class wo extends class {} {
        constructor(t, e, n, r, s) {
          super(),
            (this.location = n),
            (this._rootLView = r),
            (this._tNode = s),
            (this.destroyCbs = []),
            (this.instance = e),
            (this.hostView = this.changeDetectorRef = new Qi(r)),
            (this.componentType = t);
        }
        get injector() {
          return new tr(this._tNode, this._rootLView);
        }
        destroy() {
          this.destroyCbs &&
            (this.destroyCbs.forEach((t) => t()),
            (this.destroyCbs = null),
            !this.hostView.destroyed && this.hostView.destroy());
        }
        onDestroy(t) {
          this.destroyCbs && this.destroyCbs.push(t);
        }
      }
      const xo = new Map();
      class Co extends oo {
        constructor(t, e) {
          super(),
            (this._parent = e),
            (this._bootstrapComponents = []),
            (this.injector = this),
            (this.destroyCbs = []),
            (this.componentFactoryResolver = new vo(this));
          const n = Yt(t),
            r = t[Ft] || null;
          r && wi(r),
            (this._bootstrapComponents = ar(n.bootstrap)),
            (this._r3Injector = Ls(
              t,
              e,
              [
                { provide: oo, useValue: this },
                { provide: Si, useValue: this.componentFactoryResolver },
              ],
              st(t)
            )),
            this._r3Injector._resolveInjectorDefTypes(),
            (this.instance = this.get(t));
        }
        get(t, e = Bs.THROW_IF_NOT_FOUND, n = te.Default) {
          return t === Bs || t === oo || t === Is
            ? this
            : this._r3Injector.get(t, e, n);
        }
        destroy() {
          const t = this._r3Injector;
          !t.destroyed && t.destroy(),
            this.destroyCbs.forEach((t) => t()),
            (this.destroyCbs = null);
        }
        onDestroy(t) {
          this.destroyCbs.push(t);
        }
      }
      class So extends ao {
        constructor(t) {
          super(),
            (this.moduleType = t),
            null !== Yt(t) &&
              (function (t) {
                const e = new Set();
                !(function t(n) {
                  const r = Yt(n, !0),
                    s = r.id;
                  null !== s &&
                    ((function (t, e, n) {
                      if (e && e !== n)
                        throw new Error(
                          `Duplicate module registered for ${t} - ${st(
                            e
                          )} vs ${st(e.name)}`
                        );
                    })(s, xo.get(s), n),
                    xo.set(s, n));
                  const i = ar(r.imports);
                  for (const o of i) e.has(o) || (e.add(o), t(o));
                })(t);
              })(t);
        }
        create(t) {
          return new Co(this.moduleType, t);
        }
      }
      const ko = class extends C {
        constructor(t = !1) {
          super(), (this.__isAsync = t);
        }
        emit(t) {
          super.next(t);
        }
        subscribe(t, e, n) {
          let r,
            s = (t) => null,
            i = () => null;
          t && "object" == typeof t
            ? ((r = this.__isAsync
                ? (e) => {
                    setTimeout(() => t.next(e));
                  }
                : (e) => {
                    t.next(e);
                  }),
              t.error &&
                (s = this.__isAsync
                  ? (e) => {
                      setTimeout(() => t.error(e));
                    }
                  : (e) => {
                      t.error(e);
                    }),
              t.complete &&
                (i = this.__isAsync
                  ? () => {
                      setTimeout(() => t.complete());
                    }
                  : () => {
                      t.complete();
                    }))
            : ((r = this.__isAsync
                ? (e) => {
                    setTimeout(() => t(e));
                  }
                : (e) => {
                    t(e);
                  }),
              e &&
                (s = this.__isAsync
                  ? (t) => {
                      setTimeout(() => e(t));
                    }
                  : (t) => {
                      e(t);
                    }),
              n &&
                (i = this.__isAsync
                  ? () => {
                      setTimeout(() => n());
                    }
                  : () => {
                      n();
                    }));
          const o = super.subscribe(r, s, i);
          return t instanceof h && t.add(o), o;
        }
      };
      function Eo() {
        return this._results[Zs()]();
      }
      class To {
        constructor() {
          (this.dirty = !0),
            (this._results = []),
            (this.changes = new ko()),
            (this.length = 0);
          const t = Zs(),
            e = To.prototype;
          e[t] || (e[t] = Eo);
        }
        map(t) {
          return this._results.map(t);
        }
        filter(t) {
          return this._results.filter(t);
        }
        find(t) {
          return this._results.find(t);
        }
        reduce(t, e) {
          return this._results.reduce(t, e);
        }
        forEach(t) {
          this._results.forEach(t);
        }
        some(t) {
          return this._results.some(t);
        }
        toArray() {
          return this._results.slice();
        }
        toString() {
          return this._results.toString();
        }
        reset(t) {
          (this._results = At(t)),
            (this.dirty = !1),
            (this.length = this._results.length),
            (this.last = this._results[this.length - 1]),
            (this.first = this._results[0]);
        }
        notifyOnChanges() {
          this.changes.emit(this);
        }
        setDirty() {
          this.dirty = !0;
        }
        destroy() {
          this.changes.complete(), this.changes.unsubscribe();
        }
      }
      class Ao {
        constructor(t) {
          (this.queryList = t), (this.matches = null);
        }
        clone() {
          return new Ao(this.queryList);
        }
        setDirty() {
          this.queryList.setDirty();
        }
      }
      class Oo {
        constructor(t = []) {
          this.queries = t;
        }
        createEmbeddedView(t) {
          const e = t.queries;
          if (null !== e) {
            const n =
                null !== t.contentQueries ? t.contentQueries[0] : e.length,
              r = [];
            for (let t = 0; t < n; t++) {
              const n = e.getByIndex(t);
              r.push(this.queries[n.indexInDeclarationView].clone());
            }
            return new Oo(r);
          }
          return null;
        }
        insertView(t) {
          this.dirtyQueriesWithMatches(t);
        }
        detachView(t) {
          this.dirtyQueriesWithMatches(t);
        }
        dirtyQueriesWithMatches(t) {
          for (let e = 0; e < this.queries.length; e++)
            null !== Ho(t, e).matches && this.queries[e].setDirty();
        }
      }
      class Io {
        constructor(t, e, n, r = null) {
          (this.predicate = t),
            (this.descendants = e),
            (this.isStatic = n),
            (this.read = r);
        }
      }
      class Ro {
        constructor(t = []) {
          this.queries = t;
        }
        elementStart(t, e) {
          for (let n = 0; n < this.queries.length; n++)
            this.queries[n].elementStart(t, e);
        }
        elementEnd(t) {
          for (let e = 0; e < this.queries.length; e++)
            this.queries[e].elementEnd(t);
        }
        embeddedTView(t) {
          let e = null;
          for (let n = 0; n < this.length; n++) {
            const r = null !== e ? e.length : 0,
              s = this.getByIndex(n).embeddedTView(t, r);
            s &&
              ((s.indexInDeclarationView = n),
              null !== e ? e.push(s) : (e = [s]));
          }
          return null !== e ? new Ro(e) : null;
        }
        template(t, e) {
          for (let n = 0; n < this.queries.length; n++)
            this.queries[n].template(t, e);
        }
        getByIndex(t) {
          return this.queries[t];
        }
        get length() {
          return this.queries.length;
        }
        track(t) {
          this.queries.push(t);
        }
      }
      class Po {
        constructor(t, e = -1) {
          (this.metadata = t),
            (this.matches = null),
            (this.indexInDeclarationView = -1),
            (this.crossesNgTemplate = !1),
            (this._appliesToNextNode = !0),
            (this._declarationNodeIndex = e);
        }
        elementStart(t, e) {
          this.isApplyingToNode(e) && this.matchTNode(t, e);
        }
        elementEnd(t) {
          this._declarationNodeIndex === t.index &&
            (this._appliesToNextNode = !1);
        }
        template(t, e) {
          this.elementStart(t, e);
        }
        embeddedTView(t, e) {
          return this.isApplyingToNode(t)
            ? ((this.crossesNgTemplate = !0),
              this.addMatch(-t.index, e),
              new Po(this.metadata))
            : null;
        }
        isApplyingToNode(t) {
          if (this._appliesToNextNode && !1 === this.metadata.descendants) {
            const e = this._declarationNodeIndex;
            let n = t.parent;
            for (; null !== n && 8 & n.type && n.index !== e; ) n = n.parent;
            return e === (null !== n ? n.index : -1);
          }
          return this._appliesToNextNode;
        }
        matchTNode(t, e) {
          const n = this.metadata.predicate;
          if (Array.isArray(n))
            for (let r = 0; r < n.length; r++) {
              const s = n[r];
              this.matchTNodeWithReadOption(t, e, jo(e, s)),
                this.matchTNodeWithReadOption(t, e, Jn(e, t, s, !1, !1));
            }
          else
            n === no
              ? 4 & e.type && this.matchTNodeWithReadOption(t, e, -1)
              : this.matchTNodeWithReadOption(t, e, Jn(e, t, n, !1, !1));
        }
        matchTNodeWithReadOption(t, e, n) {
          if (null !== n) {
            const r = this.metadata.read;
            if (null !== r)
              if (r === Ai || r === co || (r === no && 4 & e.type))
                this.addMatch(e.index, -2);
              else {
                const n = Jn(e, t, r, !1, !1);
                null !== n && this.addMatch(e.index, n);
              }
            else this.addMatch(e.index, n);
          }
        }
        addMatch(t, e) {
          null === this.matches
            ? (this.matches = [t, e])
            : this.matches.push(t, e);
        }
      }
      function jo(t, e) {
        const n = t.localNames;
        if (null !== n)
          for (let r = 0; r < n.length; r += 2) if (n[r] === e) return n[r + 1];
        return null;
      }
      function No(t, e, n, r) {
        return -1 === n
          ? (function (t, e) {
              return 11 & t.type ? Ei(t, e) : 4 & t.type ? io(t, e) : null;
            })(e, t)
          : -2 === n
          ? (function (t, e, n) {
              return n === Ai
                ? Ei(e, t)
                : n === no
                ? io(e, t)
                : n === co
                ? go(e, t)
                : void 0;
            })(t, e, r)
          : Yn(t, t[1], n, e);
      }
      function Mo(t, e, n, r) {
        const s = e[19].queries[r];
        if (null === s.matches) {
          const r = t.data,
            i = n.matches,
            o = [];
          for (let t = 0; t < i.length; t += 2) {
            const s = i[t];
            o.push(s < 0 ? null : No(e, r[s], i[t + 1], n.metadata.read));
          }
          s.matches = o;
        }
        return s.matches;
      }
      function Uo(t, e, n, r) {
        const s = t.queries.getByIndex(n),
          i = s.matches;
        if (null !== i) {
          const o = Mo(t, e, s, n);
          for (let t = 0; t < i.length; t += 2) {
            const n = i[t];
            if (n > 0) r.push(o[t / 2]);
            else {
              const s = i[t + 1],
                o = e[-n];
              for (let t = 10; t < o.length; t++) {
                const e = o[t];
                e[17] === e[3] && Uo(e[1], e, s, r);
              }
              if (null !== o[9]) {
                const t = o[9];
                for (let e = 0; e < t.length; e++) {
                  const n = t[e];
                  Uo(n[1], n, s, r);
                }
              }
            }
          }
        }
        return r;
      }
      function Do(t) {
        const e = je(),
          n = Ne(),
          r = ze();
        Be(r + 1);
        const s = Ho(n, r);
        if (t.dirty && Ee(e) === s.metadata.isStatic) {
          if (null === s.matches) t.reset([]);
          else {
            const i = s.crossesNgTemplate ? Uo(n, e, r, []) : Mo(n, e, s, r);
            t.reset(i), t.notifyOnChanges();
          }
          return !0;
        }
        return !1;
      }
      function Lo(t, e, n, r) {
        !(function (t, e, n, r, s, i, o, a) {
          t.firstCreatePass &&
            ((function (t, e, n) {
              null === t.queries && (t.queries = new Ro()),
                t.queries.track(new Po(e, n));
            })(t, new Io(n, r, false, s), o.index),
            (function (t, e) {
              const n = t.contentQueries || (t.contentQueries = []);
              e !== (n.length ? n[n.length - 1] : -1) &&
                n.push(t.queries.length - 1, e);
            })(t, a)),
            (function (t, e) {
              const n = new To();
              rs(t, e, n, n.destroy),
                null === e[19] && (e[19] = new Oo()),
                e[19].queries.push(new Ao(n));
            })(t, e);
        })(Ne(), je(), e, n, r, 0, Me(), t);
      }
      function Fo() {
        return (t = je()), (e = ze()), t[19].queries[e].queryList;
        var t, e;
      }
      function Ho(t, e) {
        return t.queries.getByIndex(e);
      }
      const Vo = new mt("Application Initializer");
      let $o = (() => {
        class t {
          constructor(t) {
            (this.appInits = t),
              (this.resolve = ki),
              (this.reject = ki),
              (this.initialized = !1),
              (this.done = !1),
              (this.donePromise = new Promise((t, e) => {
                (this.resolve = t), (this.reject = e);
              }));
          }
          runInitializers() {
            if (this.initialized) return;
            const t = [],
              e = () => {
                (this.done = !0), this.resolve();
              };
            if (this.appInits)
              for (let n = 0; n < this.appInits.length; n++) {
                const e = this.appInits[n]();
                ai(e) && t.push(e);
              }
            Promise.all(t)
              .then(() => {
                e();
              })
              .catch((t) => {
                this.reject(t);
              }),
              0 === t.length && e(),
              (this.initialized = !0);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(ue(Vo, 8));
          }),
          (t.ɵprov = at({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const qo = new mt("AppId"),
        zo = {
          provide: qo,
          useFactory: function () {
            return `${Bo()}${Bo()}${Bo()}`;
          },
          deps: [],
        };
      function Bo() {
        return String.fromCharCode(97 + Math.floor(25 * Math.random()));
      }
      const Wo = new mt("Platform Initializer"),
        Go = new mt("Platform ID"),
        Zo = new mt("appBootstrapListener");
      let Qo = (() => {
        class t {
          log(t) {
            console.log(t);
          }
          warn(t) {
            console.warn(t);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵprov = at({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const Jo = new mt("LocaleId"),
        Yo = new mt("DefaultCurrencyCode");
      class Ko {
        constructor(t, e) {
          (this.ngModuleFactory = t), (this.componentFactories = e);
        }
      }
      const Xo = function (t) {
          return new So(t);
        },
        ta = Xo,
        ea = function (t) {
          return Promise.resolve(Xo(t));
        },
        na = function (t) {
          const e = Xo(t),
            n = ar(Yt(t).declarations).reduce((t, e) => {
              const n = Jt(e);
              return n && t.push(new bo(n)), t;
            }, []);
          return new Ko(e, n);
        },
        ra = na,
        sa = function (t) {
          return Promise.resolve(na(t));
        };
      let ia = (() => {
        class t {
          constructor() {
            (this.compileModuleSync = ta),
              (this.compileModuleAsync = ea),
              (this.compileModuleAndAllComponentsSync = ra),
              (this.compileModuleAndAllComponentsAsync = sa);
          }
          clearCache() {}
          clearCacheFor(t) {}
          getModuleId(t) {}
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵprov = at({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const oa = (() => Promise.resolve(0))();
      function aa(t) {
        "undefined" == typeof Zone
          ? oa.then(() => {
              t && t.apply(null, null);
            })
          : Zone.current.scheduleMicroTask("scheduleMicrotask", t);
      }
      class la {
        constructor({
          enableLongStackTrace: t = !1,
          shouldCoalesceEventChangeDetection: e = !1,
        }) {
          if (
            ((this.hasPendingMacrotasks = !1),
            (this.hasPendingMicrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new ko(!1)),
            (this.onMicrotaskEmpty = new ko(!1)),
            (this.onStable = new ko(!1)),
            (this.onError = new ko(!1)),
            "undefined" == typeof Zone)
          )
            throw new Error("In this configuration Angular requires Zone.js");
          Zone.assertZonePatched(),
            (this._nesting = 0),
            (this._outer = this._inner = Zone.current),
            Zone.TaskTrackingZoneSpec &&
              (this._inner = this._inner.fork(new Zone.TaskTrackingZoneSpec())),
            t &&
              Zone.longStackTraceZoneSpec &&
              (this._inner = this._inner.fork(Zone.longStackTraceZoneSpec)),
            (this.shouldCoalesceEventChangeDetection = e),
            (this.lastRequestAnimationFrameId = -1),
            (this.nativeRequestAnimationFrame = (function () {
              let t = Ct.requestAnimationFrame,
                e = Ct.cancelAnimationFrame;
              if ("undefined" != typeof Zone && t && e) {
                const n = t[Zone.__symbol__("OriginalDelegate")];
                n && (t = n);
                const r = e[Zone.__symbol__("OriginalDelegate")];
                r && (e = r);
              }
              return {
                nativeRequestAnimationFrame: t,
                nativeCancelAnimationFrame: e,
              };
            })().nativeRequestAnimationFrame),
            (function (t) {
              const e =
                !!t.shouldCoalesceEventChangeDetection &&
                t.nativeRequestAnimationFrame &&
                (() => {
                  !(function (t) {
                    -1 === t.lastRequestAnimationFrameId &&
                      ((t.lastRequestAnimationFrameId = t.nativeRequestAnimationFrame.call(
                        Ct,
                        () => {
                          t.fakeTopEventTask ||
                            (t.fakeTopEventTask = Zone.root.scheduleEventTask(
                              "fakeTopEventTask",
                              () => {
                                (t.lastRequestAnimationFrameId = -1),
                                  da(t),
                                  ha(t);
                              },
                              void 0,
                              () => {},
                              () => {}
                            )),
                            t.fakeTopEventTask.invoke();
                        }
                      )),
                      da(t));
                  })(t);
                });
              t._inner = t._inner.fork({
                name: "angular",
                properties: { isAngularZone: !0, maybeDelayChangeDetection: e },
                onInvokeTask: (n, r, s, i, o, a) => {
                  try {
                    return pa(t), n.invokeTask(s, i, o, a);
                  } finally {
                    e && "eventTask" === i.type && e(), fa(t);
                  }
                },
                onInvoke: (e, n, r, s, i, o, a) => {
                  try {
                    return pa(t), e.invoke(r, s, i, o, a);
                  } finally {
                    fa(t);
                  }
                },
                onHasTask: (e, n, r, s) => {
                  e.hasTask(r, s),
                    n === r &&
                      ("microTask" == s.change
                        ? ((t._hasPendingMicrotasks = s.microTask),
                          da(t),
                          ha(t))
                        : "macroTask" == s.change &&
                          (t.hasPendingMacrotasks = s.macroTask));
                },
                onHandleError: (e, n, r, s) => (
                  e.handleError(r, s),
                  t.runOutsideAngular(() => t.onError.emit(s)),
                  !1
                ),
              });
            })(this);
        }
        static isInAngularZone() {
          return !0 === Zone.current.get("isAngularZone");
        }
        static assertInAngularZone() {
          if (!la.isInAngularZone())
            throw new Error("Expected to be in Angular Zone, but it is not!");
        }
        static assertNotInAngularZone() {
          if (la.isInAngularZone())
            throw new Error("Expected to not be in Angular Zone, but it is!");
        }
        run(t, e, n) {
          return this._inner.run(t, e, n);
        }
        runTask(t, e, n, r) {
          const s = this._inner,
            i = s.scheduleEventTask("NgZoneEvent: " + r, t, ua, ca, ca);
          try {
            return s.runTask(i, e, n);
          } finally {
            s.cancelTask(i);
          }
        }
        runGuarded(t, e, n) {
          return this._inner.runGuarded(t, e, n);
        }
        runOutsideAngular(t) {
          return this._outer.run(t);
        }
      }
      function ca() {}
      const ua = {};
      function ha(t) {
        if (0 == t._nesting && !t.hasPendingMicrotasks && !t.isStable)
          try {
            t._nesting++, t.onMicrotaskEmpty.emit(null);
          } finally {
            if ((t._nesting--, !t.hasPendingMicrotasks))
              try {
                t.runOutsideAngular(() => t.onStable.emit(null));
              } finally {
                t.isStable = !0;
              }
          }
      }
      function da(t) {
        t.hasPendingMicrotasks = !!(
          t._hasPendingMicrotasks ||
          (t.shouldCoalesceEventChangeDetection &&
            -1 !== t.lastRequestAnimationFrameId)
        );
      }
      function pa(t) {
        t._nesting++,
          t.isStable && ((t.isStable = !1), t.onUnstable.emit(null));
      }
      function fa(t) {
        t._nesting--, ha(t);
      }
      class ga {
        constructor() {
          (this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new ko()),
            (this.onMicrotaskEmpty = new ko()),
            (this.onStable = new ko()),
            (this.onError = new ko());
        }
        run(t, e, n) {
          return t.apply(e, n);
        }
        runGuarded(t, e, n) {
          return t.apply(e, n);
        }
        runOutsideAngular(t) {
          return t();
        }
        runTask(t, e, n, r) {
          return t.apply(e, n);
        }
      }
      let ma = (() => {
          class t {
            constructor(t) {
              (this._ngZone = t),
                (this._pendingCount = 0),
                (this._isZoneStable = !0),
                (this._didWork = !1),
                (this._callbacks = []),
                (this.taskTrackingZone = null),
                this._watchAngularEvents(),
                t.run(() => {
                  this.taskTrackingZone =
                    "undefined" == typeof Zone
                      ? null
                      : Zone.current.get("TaskTrackingZone");
                });
            }
            _watchAngularEvents() {
              this._ngZone.onUnstable.subscribe({
                next: () => {
                  (this._didWork = !0), (this._isZoneStable = !1);
                },
              }),
                this._ngZone.runOutsideAngular(() => {
                  this._ngZone.onStable.subscribe({
                    next: () => {
                      la.assertNotInAngularZone(),
                        aa(() => {
                          (this._isZoneStable = !0),
                            this._runCallbacksIfReady();
                        });
                    },
                  });
                });
            }
            increasePendingRequestCount() {
              return (
                (this._pendingCount += 1),
                (this._didWork = !0),
                this._pendingCount
              );
            }
            decreasePendingRequestCount() {
              if (((this._pendingCount -= 1), this._pendingCount < 0))
                throw new Error("pending async requests below zero");
              return this._runCallbacksIfReady(), this._pendingCount;
            }
            isStable() {
              return (
                this._isZoneStable &&
                0 === this._pendingCount &&
                !this._ngZone.hasPendingMacrotasks
              );
            }
            _runCallbacksIfReady() {
              if (this.isStable())
                aa(() => {
                  for (; 0 !== this._callbacks.length; ) {
                    let t = this._callbacks.pop();
                    clearTimeout(t.timeoutId), t.doneCb(this._didWork);
                  }
                  this._didWork = !1;
                });
              else {
                let t = this.getPendingTasks();
                (this._callbacks = this._callbacks.filter(
                  (e) =>
                    !e.updateCb ||
                    !e.updateCb(t) ||
                    (clearTimeout(e.timeoutId), !1)
                )),
                  (this._didWork = !0);
              }
            }
            getPendingTasks() {
              return this.taskTrackingZone
                ? this.taskTrackingZone.macroTasks.map((t) => ({
                    source: t.source,
                    creationLocation: t.creationLocation,
                    data: t.data,
                  }))
                : [];
            }
            addCallback(t, e, n) {
              let r = -1;
              e &&
                e > 0 &&
                (r = setTimeout(() => {
                  (this._callbacks = this._callbacks.filter(
                    (t) => t.timeoutId !== r
                  )),
                    t(this._didWork, this.getPendingTasks());
                }, e)),
                this._callbacks.push({ doneCb: t, timeoutId: r, updateCb: n });
            }
            whenStable(t, e, n) {
              if (n && !this.taskTrackingZone)
                throw new Error(
                  'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?'
                );
              this.addCallback(t, e, n), this._runCallbacksIfReady();
            }
            getPendingRequestCount() {
              return this._pendingCount;
            }
            findProviders(t, e, n) {
              return [];
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(ue(la));
            }),
            (t.ɵprov = at({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        va = (() => {
          class t {
            constructor() {
              (this._applications = new Map()), ba.addToWindow(this);
            }
            registerApplication(t, e) {
              this._applications.set(t, e);
            }
            unregisterApplication(t) {
              this._applications.delete(t);
            }
            unregisterAllApplications() {
              this._applications.clear();
            }
            getTestability(t) {
              return this._applications.get(t) || null;
            }
            getAllTestabilities() {
              return Array.from(this._applications.values());
            }
            getAllRootElements() {
              return Array.from(this._applications.keys());
            }
            findTestabilityInTree(t, e = !0) {
              return ba.findTestabilityInTree(this, t, e);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵprov = at({ token: t, factory: t.ɵfac })),
            t
          );
        })();
      class ya {
        addToWindow(t) {}
        findTestabilityInTree(t, e, n) {
          return null;
        }
      }
      let _a,
        ba = new ya();
      const wa = new mt("AllowMultipleToken");
      class xa {
        constructor(t, e) {
          (this.name = t), (this.token = e);
        }
      }
      function Ca(t, e, n = []) {
        const r = "Platform: " + e,
          s = new mt(r);
        return (e = []) => {
          let i = Sa();
          if (!i || i.injector.get(wa, !1))
            if (t) t(n.concat(e).concat({ provide: s, useValue: !0 }));
            else {
              const t = n
                .concat(e)
                .concat(
                  { provide: s, useValue: !0 },
                  { provide: Ps, useValue: "platform" }
                );
              !(function (t) {
                if (_a && !_a.destroyed && !_a.injector.get(wa, !1))
                  throw new Error(
                    "There can be only one platform. Destroy the previous one to create a new one."
                  );
                _a = t.get(ka);
                const e = t.get(Wo, null);
                e && e.forEach((t) => t());
              })(Bs.create({ providers: t, name: r }));
            }
          return (function (t) {
            const e = Sa();
            if (!e) throw new Error("No platform exists!");
            if (!e.injector.get(t, null))
              throw new Error(
                "A platform with a different configuration has been created. Please destroy it first."
              );
            return e;
          })(s);
        };
      }
      function Sa() {
        return _a && !_a.destroyed ? _a : null;
      }
      let ka = (() => {
        class t {
          constructor(t) {
            (this._injector = t),
              (this._modules = []),
              (this._destroyListeners = []),
              (this._destroyed = !1);
          }
          bootstrapModuleFactory(t, e) {
            const n = (function (t, e) {
                let n;
                return (
                  (n =
                    "noop" === t
                      ? new ga()
                      : ("zone.js" === t ? void 0 : t) ||
                        new la({
                          enableLongStackTrace: an(),
                          shouldCoalesceEventChangeDetection: e,
                        })),
                  n
                );
              })(e ? e.ngZone : void 0, (e && e.ngZoneEventCoalescing) || !1),
              r = [{ provide: la, useValue: n }];
            return n.run(() => {
              const e = Bs.create({
                  providers: r,
                  parent: this.injector,
                  name: t.moduleType.name,
                }),
                s = t.create(e),
                i = s.injector.get(sr, null);
              if (!i)
                throw new Error(
                  "No ErrorHandler. Is platform module (BrowserModule) included?"
                );
              return (
                s.onDestroy(() => Aa(this._modules, s)),
                n.runOutsideAngular(() =>
                  n.onError.subscribe({
                    next: (t) => {
                      i.handleError(t);
                    },
                  })
                ),
                (function (t, e, n) {
                  try {
                    const r = n();
                    return ai(r)
                      ? r.catch((n) => {
                          throw (
                            (e.runOutsideAngular(() => t.handleError(n)), n)
                          );
                        })
                      : r;
                  } catch (r) {
                    throw (e.runOutsideAngular(() => t.handleError(r)), r);
                  }
                })(i, n, () => {
                  const t = s.injector.get($o);
                  return (
                    t.runInitializers(),
                    t.donePromise.then(
                      () => (
                        wi(s.injector.get(Jo, "en-US") || "en-US"),
                        this._moduleDoBootstrap(s),
                        s
                      )
                    )
                  );
                })
              );
            });
          }
          bootstrapModule(t, e = []) {
            const n = Ea({}, e);
            return (function (t, e, n) {
              const r = new So(n);
              return Promise.resolve(r);
            })(0, 0, t).then((t) => this.bootstrapModuleFactory(t, n));
          }
          _moduleDoBootstrap(t) {
            const e = t.injector.get(Ta);
            if (t._bootstrapComponents.length > 0)
              t._bootstrapComponents.forEach((t) => e.bootstrap(t));
            else {
              if (!t.instance.ngDoBootstrap)
                throw new Error(
                  `The module ${st(
                    t.instance.constructor
                  )} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.`
                );
              t.instance.ngDoBootstrap(e);
            }
            this._modules.push(t);
          }
          onDestroy(t) {
            this._destroyListeners.push(t);
          }
          get injector() {
            return this._injector;
          }
          destroy() {
            if (this._destroyed)
              throw new Error("The platform has already been destroyed!");
            this._modules.slice().forEach((t) => t.destroy()),
              this._destroyListeners.forEach((t) => t()),
              (this._destroyed = !0);
          }
          get destroyed() {
            return this._destroyed;
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(ue(Bs));
          }),
          (t.ɵprov = at({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      function Ea(t, e) {
        return Array.isArray(e)
          ? e.reduce(Ea, t)
          : Object.assign(Object.assign({}, t), e);
      }
      let Ta = (() => {
        class t {
          constructor(t, e, n, r, s, i) {
            (this._zone = t),
              (this._console = e),
              (this._injector = n),
              (this._exceptionHandler = r),
              (this._componentFactoryResolver = s),
              (this._initStatus = i),
              (this._bootstrapListeners = []),
              (this._views = []),
              (this._runningTick = !1),
              (this._enforceNoNewChanges = !1),
              (this._stable = !0),
              (this.componentTypes = []),
              (this.components = []),
              (this._enforceNoNewChanges = an()),
              this._zone.onMicrotaskEmpty.subscribe({
                next: () => {
                  this._zone.run(() => {
                    this.tick();
                  });
                },
              });
            const o = new y((t) => {
                (this._stable =
                  this._zone.isStable &&
                  !this._zone.hasPendingMacrotasks &&
                  !this._zone.hasPendingMicrotasks),
                  this._zone.runOutsideAngular(() => {
                    t.next(this._stable), t.complete();
                  });
              }),
              a = new y((t) => {
                let e;
                this._zone.runOutsideAngular(() => {
                  e = this._zone.onStable.subscribe(() => {
                    la.assertNotInAngularZone(),
                      aa(() => {
                        this._stable ||
                          this._zone.hasPendingMacrotasks ||
                          this._zone.hasPendingMicrotasks ||
                          ((this._stable = !0), t.next(!0));
                      });
                  });
                });
                const n = this._zone.onUnstable.subscribe(() => {
                  la.assertInAngularZone(),
                    this._stable &&
                      ((this._stable = !1),
                      this._zone.runOutsideAngular(() => {
                        t.next(!1);
                      }));
                });
                return () => {
                  e.unsubscribe(), n.unsubscribe();
                };
              });
            this.isStable = (function (...t) {
              let e = Number.POSITIVE_INFINITY,
                n = null,
                r = t[t.length - 1];
              return (
                k(r)
                  ? ((n = t.pop()),
                    t.length > 1 &&
                      "number" == typeof t[t.length - 1] &&
                      (e = t.pop()))
                  : "number" == typeof r && (e = t.pop()),
                null === n && 1 === t.length && t[0] instanceof y
                  ? t[0]
                  : q(e)(z(t, n))
              );
            })(
              o,
              a.pipe((t) => {
                return B()(
                  ((e = Y),
                  function (t) {
                    let n;
                    n =
                      "function" == typeof e
                        ? e
                        : function () {
                            return e;
                          };
                    const r = Object.create(t, Q);
                    return (r.source = t), (r.subjectFactory = n), r;
                  })(t)
                );
                var e;
              })
            );
          }
          bootstrap(t, e) {
            if (!this._initStatus.done)
              throw new Error(
                "Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module."
              );
            let n;
            (n =
              t instanceof xi
                ? t
                : this._componentFactoryResolver.resolveComponentFactory(t)),
              this.componentTypes.push(n.componentType);
            const r = n.isBoundToModule ? void 0 : this._injector.get(oo),
              s = n.create(Bs.NULL, [], e || n.selector, r);
            s.onDestroy(() => {
              this._unloadComponent(s);
            });
            const i = s.injector.get(ma, null);
            return (
              i &&
                s.injector
                  .get(va)
                  .registerApplication(s.location.nativeElement, i),
              this._loadComponent(s),
              an() &&
                this._console.log(
                  "Angular is running in development mode. Call enableProdMode() to enable production mode."
                ),
              s
            );
          }
          tick() {
            if (this._runningTick)
              throw new Error("ApplicationRef.tick is called recursively");
            try {
              this._runningTick = !0;
              for (let t of this._views) t.detectChanges();
              if (this._enforceNoNewChanges)
                for (let t of this._views) t.checkNoChanges();
            } catch (t) {
              this._zone.runOutsideAngular(() =>
                this._exceptionHandler.handleError(t)
              );
            } finally {
              this._runningTick = !1;
            }
          }
          attachView(t) {
            const e = t;
            this._views.push(e), e.attachToAppRef(this);
          }
          detachView(t) {
            const e = t;
            Aa(this._views, e), e.detachFromAppRef();
          }
          _loadComponent(t) {
            this.attachView(t.hostView),
              this.tick(),
              this.components.push(t),
              this._injector
                .get(Zo, [])
                .concat(this._bootstrapListeners)
                .forEach((e) => e(t));
          }
          _unloadComponent(t) {
            this.detachView(t.hostView), Aa(this.components, t);
          }
          ngOnDestroy() {
            this._views.slice().forEach((t) => t.destroy());
          }
          get viewCount() {
            return this._views.length;
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(ue(la), ue(Qo), ue(Bs), ue(sr), ue(Si), ue($o));
          }),
          (t.ɵprov = at({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      function Aa(t, e) {
        const n = t.indexOf(e);
        n > -1 && t.splice(n, 1);
      }
      class Oa {}
      class Ia {}
      const Ra = { factoryPathPrefix: "", factoryPathSuffix: ".ngfactory" };
      let Pa = (() => {
        class t {
          constructor(t, e) {
            (this._compiler = t), (this._config = e || Ra);
          }
          load(t) {
            return this.loadAndCompile(t);
          }
          loadAndCompile(t) {
            let [e, r] = t.split("#");
            return (
              void 0 === r && (r = "default"),
              n("zn8P")(e)
                .then((t) => t[r])
                .then((t) => ja(t, e, r))
                .then((t) => this._compiler.compileModuleAsync(t))
            );
          }
          loadFactory(t) {
            let [e, r] = t.split("#"),
              s = "NgFactory";
            return (
              void 0 === r && ((r = "default"), (s = "")),
              n("zn8P")(
                this._config.factoryPathPrefix +
                  e +
                  this._config.factoryPathSuffix
              )
                .then((t) => t[r + s])
                .then((t) => ja(t, e, r))
            );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(ue(ia), ue(Ia, 8));
          }),
          (t.ɵprov = at({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      function ja(t, e, n) {
        if (!t) throw new Error(`Cannot find '${n}' in '${e}'`);
        return t;
      }
      const Na = Ca(null, "core", [
          { provide: Go, useValue: "unknown" },
          { provide: ka, deps: [Bs] },
          { provide: va, deps: [] },
          { provide: Qo, deps: [] },
        ]),
        Ma = [
          { provide: Ta, useClass: Ta, deps: [la, Qo, Bs, sr, Si, $o] },
          {
            provide: _o,
            deps: [la],
            useFactory: function (t) {
              let e = [];
              return (
                t.onStable.subscribe(() => {
                  for (; e.length; ) e.pop()();
                }),
                function (t) {
                  e.push(t);
                }
              );
            },
          },
          { provide: $o, useClass: $o, deps: [[new et(), Vo]] },
          { provide: ia, useClass: ia, deps: [] },
          zo,
          {
            provide: Bi,
            useFactory: function () {
              return Xi;
            },
            deps: [],
          },
          {
            provide: Wi,
            useFactory: function () {
              return to;
            },
            deps: [],
          },
          {
            provide: Jo,
            useFactory: function (t) {
              return (
                wi(
                  (t =
                    t ||
                    ("undefined" != typeof $localize && $localize.locale) ||
                    "en-US")
                ),
                t
              );
            },
            deps: [[new tt(Jo), new et(), new rt()]],
          },
          { provide: Yo, useValue: "USD" },
        ];
      let Ua = (() => {
          class t {
            constructor(t) {}
          }
          return (
            (t.ɵmod = Gt({ type: t })),
            (t.ɵinj = lt({
              factory: function (e) {
                return new (e || t)(ue(Ta));
              },
              providers: Ma,
            })),
            t
          );
        })(),
        Da = null;
      function La() {
        return Da;
      }
      const Fa = new mt("DocumentToken");
      let Ha = (() => {
        class t {}
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵprov = at({ factory: Va, token: t, providedIn: "platform" })),
          t
        );
      })();
      function Va() {
        return ue(qa);
      }
      const $a = new mt("Location Initialized");
      let qa = (() => {
        class t extends Ha {
          constructor(t) {
            super(), (this._doc = t), this._init();
          }
          _init() {
            (this.location = La().getLocation()),
              (this._history = La().getHistory());
          }
          getBaseHrefFromDOM() {
            return La().getBaseHref(this._doc);
          }
          onPopState(t) {
            La()
              .getGlobalEventTarget(this._doc, "window")
              .addEventListener("popstate", t, !1);
          }
          onHashChange(t) {
            La()
              .getGlobalEventTarget(this._doc, "window")
              .addEventListener("hashchange", t, !1);
          }
          get href() {
            return this.location.href;
          }
          get protocol() {
            return this.location.protocol;
          }
          get hostname() {
            return this.location.hostname;
          }
          get port() {
            return this.location.port;
          }
          get pathname() {
            return this.location.pathname;
          }
          get search() {
            return this.location.search;
          }
          get hash() {
            return this.location.hash;
          }
          set pathname(t) {
            this.location.pathname = t;
          }
          pushState(t, e, n) {
            za() ? this._history.pushState(t, e, n) : (this.location.hash = n);
          }
          replaceState(t, e, n) {
            za()
              ? this._history.replaceState(t, e, n)
              : (this.location.hash = n);
          }
          forward() {
            this._history.forward();
          }
          back() {
            this._history.back();
          }
          getState() {
            return this._history.state;
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(ue(Fa));
          }),
          (t.ɵprov = at({ factory: Ba, token: t, providedIn: "platform" })),
          t
        );
      })();
      function za() {
        return !!window.history.pushState;
      }
      function Ba() {
        return new qa(ue(Fa));
      }
      function Wa(t, e) {
        if (0 == t.length) return e;
        if (0 == e.length) return t;
        let n = 0;
        return (
          t.endsWith("/") && n++,
          e.startsWith("/") && n++,
          2 == n ? t + e.substring(1) : 1 == n ? t + e : t + "/" + e
        );
      }
      function Ga(t) {
        const e = t.match(/#|\?|$/),
          n = (e && e.index) || t.length;
        return t.slice(0, n - ("/" === t[n - 1] ? 1 : 0)) + t.slice(n);
      }
      function Za(t) {
        return t && "?" !== t[0] ? "?" + t : t;
      }
      let Qa = (() => {
        class t {}
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵprov = at({ factory: Ja, token: t, providedIn: "root" })),
          t
        );
      })();
      function Ja(t) {
        const e = ue(Fa).location;
        return new Ka(ue(Ha), (e && e.origin) || "");
      }
      const Ya = new mt("appBaseHref");
      let Ka = (() => {
          class t extends Qa {
            constructor(t, e) {
              if (
                (super(),
                (this._platformLocation = t),
                null == e && (e = this._platformLocation.getBaseHrefFromDOM()),
                null == e)
              )
                throw new Error(
                  "No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document."
                );
              this._baseHref = e;
            }
            onPopState(t) {
              this._platformLocation.onPopState(t),
                this._platformLocation.onHashChange(t);
            }
            getBaseHref() {
              return this._baseHref;
            }
            prepareExternalUrl(t) {
              return Wa(this._baseHref, t);
            }
            path(t = !1) {
              const e =
                  this._platformLocation.pathname +
                  Za(this._platformLocation.search),
                n = this._platformLocation.hash;
              return n && t ? `${e}${n}` : e;
            }
            pushState(t, e, n, r) {
              const s = this.prepareExternalUrl(n + Za(r));
              this._platformLocation.pushState(t, e, s);
            }
            replaceState(t, e, n, r) {
              const s = this.prepareExternalUrl(n + Za(r));
              this._platformLocation.replaceState(t, e, s);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(ue(Ha), ue(Ya, 8));
            }),
            (t.ɵprov = at({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        Xa = (() => {
          class t extends Qa {
            constructor(t, e) {
              super(),
                (this._platformLocation = t),
                (this._baseHref = ""),
                null != e && (this._baseHref = e);
            }
            onPopState(t) {
              this._platformLocation.onPopState(t),
                this._platformLocation.onHashChange(t);
            }
            getBaseHref() {
              return this._baseHref;
            }
            path(t = !1) {
              let e = this._platformLocation.hash;
              return null == e && (e = "#"), e.length > 0 ? e.substring(1) : e;
            }
            prepareExternalUrl(t) {
              const e = Wa(this._baseHref, t);
              return e.length > 0 ? "#" + e : e;
            }
            pushState(t, e, n, r) {
              let s = this.prepareExternalUrl(n + Za(r));
              0 == s.length && (s = this._platformLocation.pathname),
                this._platformLocation.pushState(t, e, s);
            }
            replaceState(t, e, n, r) {
              let s = this.prepareExternalUrl(n + Za(r));
              0 == s.length && (s = this._platformLocation.pathname),
                this._platformLocation.replaceState(t, e, s);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(ue(Ha), ue(Ya, 8));
            }),
            (t.ɵprov = at({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        tl = (() => {
          class t {
            constructor(t, e) {
              (this._subject = new ko()),
                (this._urlChangeListeners = []),
                (this._platformStrategy = t);
              const n = this._platformStrategy.getBaseHref();
              (this._platformLocation = e),
                (this._baseHref = Ga(nl(n))),
                this._platformStrategy.onPopState((t) => {
                  this._subject.emit({
                    url: this.path(!0),
                    pop: !0,
                    state: t.state,
                    type: t.type,
                  });
                });
            }
            path(t = !1) {
              return this.normalize(this._platformStrategy.path(t));
            }
            getState() {
              return this._platformLocation.getState();
            }
            isCurrentPathEqualTo(t, e = "") {
              return this.path() == this.normalize(t + Za(e));
            }
            normalize(e) {
              return t.stripTrailingSlash(
                (function (t, e) {
                  return t && e.startsWith(t) ? e.substring(t.length) : e;
                })(this._baseHref, nl(e))
              );
            }
            prepareExternalUrl(t) {
              return (
                t && "/" !== t[0] && (t = "/" + t),
                this._platformStrategy.prepareExternalUrl(t)
              );
            }
            go(t, e = "", n = null) {
              this._platformStrategy.pushState(n, "", t, e),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(t + Za(e)),
                  n
                );
            }
            replaceState(t, e = "", n = null) {
              this._platformStrategy.replaceState(n, "", t, e),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(t + Za(e)),
                  n
                );
            }
            forward() {
              this._platformStrategy.forward();
            }
            back() {
              this._platformStrategy.back();
            }
            onUrlChange(t) {
              this._urlChangeListeners.push(t),
                this._urlChangeSubscription ||
                  (this._urlChangeSubscription = this.subscribe((t) => {
                    this._notifyUrlChangeListeners(t.url, t.state);
                  }));
            }
            _notifyUrlChangeListeners(t = "", e) {
              this._urlChangeListeners.forEach((n) => n(t, e));
            }
            subscribe(t, e, n) {
              return this._subject.subscribe({
                next: t,
                error: e,
                complete: n,
              });
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(ue(Qa), ue(Ha));
            }),
            (t.normalizeQueryParams = Za),
            (t.joinWithSlash = Wa),
            (t.stripTrailingSlash = Ga),
            (t.ɵprov = at({ factory: el, token: t, providedIn: "root" })),
            t
          );
        })();
      function el() {
        return new tl(ue(Qa), ue(Ha));
      }
      function nl(t) {
        return t.replace(/\/index.html$/, "");
      }
      var rl = (function (t) {
        return (
          (t[(t.Zero = 0)] = "Zero"),
          (t[(t.One = 1)] = "One"),
          (t[(t.Two = 2)] = "Two"),
          (t[(t.Few = 3)] = "Few"),
          (t[(t.Many = 4)] = "Many"),
          (t[(t.Other = 5)] = "Other"),
          t
        );
      })({});
      class sl {}
      let il = (() => {
        class t extends sl {
          constructor(t) {
            super(), (this.locale = t);
          }
          getPluralCategory(t, e) {
            switch (
              (function (t) {
                return (function (t) {
                  const e = (function (t) {
                    return t.toLowerCase().replace(/_/g, "-");
                  })(t);
                  let n = yi(e);
                  if (n) return n;
                  const r = e.split("-")[0];
                  if (((n = yi(r)), n)) return n;
                  if ("en" === r) return mi;
                  throw new Error(`Missing locale data for the locale "${t}".`);
                })(t)[_i.PluralCase];
              })(e || this.locale)(t)
            ) {
              case rl.Zero:
                return "zero";
              case rl.One:
                return "one";
              case rl.Two:
                return "two";
              case rl.Few:
                return "few";
              case rl.Many:
                return "many";
              default:
                return "other";
            }
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(ue(Jo));
          }),
          (t.ɵprov = at({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      class ol {
        constructor(t, e, n, r) {
          (this.$implicit = t),
            (this.ngForOf = e),
            (this.index = n),
            (this.count = r);
        }
        get first() {
          return 0 === this.index;
        }
        get last() {
          return this.index === this.count - 1;
        }
        get even() {
          return this.index % 2 == 0;
        }
        get odd() {
          return !this.even;
        }
      }
      let al = (() => {
        class t {
          constructor(t, e, n) {
            (this._viewContainer = t),
              (this._template = e),
              (this._differs = n),
              (this._ngForOf = null),
              (this._ngForOfDirty = !0),
              (this._differ = null);
          }
          set ngForOf(t) {
            (this._ngForOf = t), (this._ngForOfDirty = !0);
          }
          set ngForTrackBy(t) {
            an() &&
              null != t &&
              "function" != typeof t &&
              console &&
              console.warn &&
              console.warn(
                `trackBy must be a function, but received ${JSON.stringify(
                  t
                )}. See https://angular.io/api/common/NgForOf#change-propagation for more information.`
              ),
              (this._trackByFn = t);
          }
          get ngForTrackBy() {
            return this._trackByFn;
          }
          set ngForTemplate(t) {
            t && (this._template = t);
          }
          ngDoCheck() {
            if (this._ngForOfDirty) {
              this._ngForOfDirty = !1;
              const n = this._ngForOf;
              if (!this._differ && n)
                try {
                  this._differ = this._differs
                    .find(n)
                    .create(this.ngForTrackBy);
                } catch (e) {
                  throw new Error(
                    `Cannot find a differ supporting object '${n}' of type '${
                      ((t = n), t.name || typeof t)
                    }'. NgFor only supports binding to Iterables such as Arrays.`
                  );
                }
            }
            var t;
            if (this._differ) {
              const t = this._differ.diff(this._ngForOf);
              t && this._applyChanges(t);
            }
          }
          _applyChanges(t) {
            const e = [];
            t.forEachOperation((t, n, r) => {
              if (null == t.previousIndex) {
                const n = this._viewContainer.createEmbeddedView(
                    this._template,
                    new ol(null, this._ngForOf, -1, -1),
                    null === r ? void 0 : r
                  ),
                  s = new ll(t, n);
                e.push(s);
              } else if (null == r)
                this._viewContainer.remove(null === n ? void 0 : n);
              else if (null !== n) {
                const s = this._viewContainer.get(n);
                this._viewContainer.move(s, r);
                const i = new ll(t, s);
                e.push(i);
              }
            });
            for (let n = 0; n < e.length; n++)
              this._perViewChange(e[n].view, e[n].record);
            for (let n = 0, r = this._viewContainer.length; n < r; n++) {
              const t = this._viewContainer.get(n);
              (t.context.index = n),
                (t.context.count = r),
                (t.context.ngForOf = this._ngForOf);
            }
            t.forEachIdentityChange((t) => {
              this._viewContainer.get(t.currentIndex).context.$implicit =
                t.item;
            });
          }
          _perViewChange(t, e) {
            t.context.$implicit = e.item;
          }
          static ngTemplateContextGuard(t, e) {
            return !0;
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(ti(co), ti(no), ti(Bi));
          }),
          (t.ɵdir = Qt({
            type: t,
            selectors: [["", "ngFor", "", "ngForOf", ""]],
            inputs: {
              ngForOf: "ngForOf",
              ngForTrackBy: "ngForTrackBy",
              ngForTemplate: "ngForTemplate",
            },
          })),
          t
        );
      })();
      class ll {
        constructor(t, e) {
          (this.record = t), (this.view = e);
        }
      }
      let cl = (() => {
          class t {}
          return (
            (t.ɵmod = Gt({ type: t })),
            (t.ɵinj = lt({
              factory: function (e) {
                return new (e || t)();
              },
              providers: [{ provide: sl, useClass: il }],
            })),
            t
          );
        })(),
        ul = (() => {
          class t {}
          return (
            (t.ɵprov = at({
              token: t,
              providedIn: "root",
              factory: () => new hl(ue(Fa), window, ue(sr)),
            })),
            t
          );
        })();
      class hl {
        constructor(t, e, n) {
          (this.document = t),
            (this.window = e),
            (this.errorHandler = n),
            (this.offset = () => [0, 0]);
        }
        setOffset(t) {
          this.offset = Array.isArray(t) ? () => t : t;
        }
        getScrollPosition() {
          return this.supportsScrolling()
            ? [this.window.scrollX, this.window.scrollY]
            : [0, 0];
        }
        scrollToPosition(t) {
          this.supportsScrolling() && this.window.scrollTo(t[0], t[1]);
        }
        scrollToAnchor(t) {
          if (this.supportsScrolling()) {
            const e =
              this.document.getElementById(t) ||
              this.document.getElementsByName(t)[0];
            e && this.scrollToElement(e);
          }
        }
        setHistoryScrollRestoration(t) {
          if (this.supportScrollRestoration()) {
            const e = this.window.history;
            e && e.scrollRestoration && (e.scrollRestoration = t);
          }
        }
        scrollToElement(t) {
          const e = t.getBoundingClientRect(),
            n = e.left + this.window.pageXOffset,
            r = e.top + this.window.pageYOffset,
            s = this.offset();
          this.window.scrollTo(n - s[0], r - s[1]);
        }
        supportScrollRestoration() {
          try {
            if (!this.window || !this.window.scrollTo) return !1;
            const t =
              dl(this.window.history) ||
              dl(Object.getPrototypeOf(this.window.history));
            return !(!t || (!t.writable && !t.set));
          } catch (t) {
            return !1;
          }
        }
        supportsScrolling() {
          try {
            return !!this.window.scrollTo;
          } catch (t) {
            return !1;
          }
        }
      }
      function dl(t) {
        return Object.getOwnPropertyDescriptor(t, "scrollRestoration");
      }
      class pl extends class extends class {} {
        constructor() {
          super();
        }
        supportsDOMEvents() {
          return !0;
        }
      } {
        static makeCurrent() {
          var t;
          (t = new pl()), Da || (Da = t);
        }
        getProperty(t, e) {
          return t[e];
        }
        log(t) {
          window.console && window.console.log && window.console.log(t);
        }
        logGroup(t) {
          window.console && window.console.group && window.console.group(t);
        }
        logGroupEnd() {
          window.console &&
            window.console.groupEnd &&
            window.console.groupEnd();
        }
        onAndCancel(t, e, n) {
          return (
            t.addEventListener(e, n, !1),
            () => {
              t.removeEventListener(e, n, !1);
            }
          );
        }
        dispatchEvent(t, e) {
          t.dispatchEvent(e);
        }
        remove(t) {
          return t.parentNode && t.parentNode.removeChild(t), t;
        }
        getValue(t) {
          return t.value;
        }
        createElement(t, e) {
          return (e = e || this.getDefaultDocument()).createElement(t);
        }
        createHtmlDocument() {
          return document.implementation.createHTMLDocument("fakeTitle");
        }
        getDefaultDocument() {
          return document;
        }
        isElementNode(t) {
          return t.nodeType === Node.ELEMENT_NODE;
        }
        isShadowRoot(t) {
          return t instanceof DocumentFragment;
        }
        getGlobalEventTarget(t, e) {
          return "window" === e
            ? window
            : "document" === e
            ? t
            : "body" === e
            ? t.body
            : null;
        }
        getHistory() {
          return window.history;
        }
        getLocation() {
          return window.location;
        }
        getBaseHref(t) {
          const e =
            gl || ((gl = document.querySelector("base")), gl)
              ? gl.getAttribute("href")
              : null;
          return null == e
            ? null
            : ((n = e),
              fl || (fl = document.createElement("a")),
              fl.setAttribute("href", n),
              "/" === fl.pathname.charAt(0) ? fl.pathname : "/" + fl.pathname);
          var n;
        }
        resetBaseElement() {
          gl = null;
        }
        getUserAgent() {
          return window.navigator.userAgent;
        }
        performanceNow() {
          return window.performance && window.performance.now
            ? window.performance.now()
            : new Date().getTime();
        }
        supportsCookies() {
          return !0;
        }
        getCookie(t) {
          return (function (t, e) {
            e = encodeURIComponent(e);
            for (const n of t.split(";")) {
              const t = n.indexOf("="),
                [r, s] = -1 == t ? [n, ""] : [n.slice(0, t), n.slice(t + 1)];
              if (r.trim() === e) return decodeURIComponent(s);
            }
            return null;
          })(document.cookie, t);
        }
      }
      let fl,
        gl = null;
      const ml = new mt("TRANSITION_ID"),
        vl = [
          {
            provide: Vo,
            useFactory: function (t, e, n) {
              return () => {
                n.get($o).donePromise.then(() => {
                  const n = La();
                  Array.prototype.slice
                    .apply(e.querySelectorAll("style[ng-transition]"))
                    .filter((e) => e.getAttribute("ng-transition") === t)
                    .forEach((t) => n.remove(t));
                });
              };
            },
            deps: [ml, Fa, Bs],
            multi: !0,
          },
        ];
      class yl {
        static init() {
          var t;
          (t = new yl()), (ba = t);
        }
        addToWindow(t) {
          (Ct.getAngularTestability = (e, n = !0) => {
            const r = t.findTestabilityInTree(e, n);
            if (null == r)
              throw new Error("Could not find testability for element.");
            return r;
          }),
            (Ct.getAllAngularTestabilities = () => t.getAllTestabilities()),
            (Ct.getAllAngularRootElements = () => t.getAllRootElements()),
            Ct.frameworkStabilizers || (Ct.frameworkStabilizers = []),
            Ct.frameworkStabilizers.push((t) => {
              const e = Ct.getAllAngularTestabilities();
              let n = e.length,
                r = !1;
              const s = function (e) {
                (r = r || e), n--, 0 == n && t(r);
              };
              e.forEach(function (t) {
                t.whenStable(s);
              });
            });
        }
        findTestabilityInTree(t, e, n) {
          if (null == e) return null;
          const r = t.getTestability(e);
          return null != r
            ? r
            : n
            ? La().isShadowRoot(e)
              ? this.findTestabilityInTree(t, e.host, !0)
              : this.findTestabilityInTree(t, e.parentElement, !0)
            : null;
        }
      }
      const _l = new mt("EventManagerPlugins");
      let bl = (() => {
        class t {
          constructor(t, e) {
            (this._zone = e),
              (this._eventNameToPlugin = new Map()),
              t.forEach((t) => (t.manager = this)),
              (this._plugins = t.slice().reverse());
          }
          addEventListener(t, e, n) {
            return this._findPluginFor(e).addEventListener(t, e, n);
          }
          addGlobalEventListener(t, e, n) {
            return this._findPluginFor(e).addGlobalEventListener(t, e, n);
          }
          getZone() {
            return this._zone;
          }
          _findPluginFor(t) {
            const e = this._eventNameToPlugin.get(t);
            if (e) return e;
            const n = this._plugins;
            for (let r = 0; r < n.length; r++) {
              const e = n[r];
              if (e.supports(t)) return this._eventNameToPlugin.set(t, e), e;
            }
            throw new Error("No event manager plugin found for event " + t);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(ue(_l), ue(la));
          }),
          (t.ɵprov = at({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      class wl {
        constructor(t) {
          this._doc = t;
        }
        addGlobalEventListener(t, e, n) {
          const r = La().getGlobalEventTarget(this._doc, t);
          if (!r)
            throw new Error(`Unsupported event target ${r} for event ${e}`);
          return this.addEventListener(r, e, n);
        }
      }
      let xl = (() => {
          class t {
            constructor() {
              this._stylesSet = new Set();
            }
            addStyles(t) {
              const e = new Set();
              t.forEach((t) => {
                this._stylesSet.has(t) || (this._stylesSet.add(t), e.add(t));
              }),
                this.onStylesAdded(e);
            }
            onStylesAdded(t) {}
            getAllStyles() {
              return Array.from(this._stylesSet);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵprov = at({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        Cl = (() => {
          class t extends xl {
            constructor(t) {
              super(),
                (this._doc = t),
                (this._hostNodes = new Set()),
                (this._styleNodes = new Set()),
                this._hostNodes.add(t.head);
            }
            _addStylesToHost(t, e) {
              t.forEach((t) => {
                const n = this._doc.createElement("style");
                (n.textContent = t), this._styleNodes.add(e.appendChild(n));
              });
            }
            addHost(t) {
              this._addStylesToHost(this._stylesSet, t), this._hostNodes.add(t);
            }
            removeHost(t) {
              this._hostNodes.delete(t);
            }
            onStylesAdded(t) {
              this._hostNodes.forEach((e) => this._addStylesToHost(t, e));
            }
            ngOnDestroy() {
              this._styleNodes.forEach((t) => La().remove(t));
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(ue(Fa));
            }),
            (t.ɵprov = at({ token: t, factory: t.ɵfac })),
            t
          );
        })();
      const Sl = {
          svg: "http://www.w3.org/2000/svg",
          xhtml: "http://www.w3.org/1999/xhtml",
          xlink: "http://www.w3.org/1999/xlink",
          xml: "http://www.w3.org/XML/1998/namespace",
          xmlns: "http://www.w3.org/2000/xmlns/",
        },
        kl = /%COMP%/g;
      function El(t, e, n) {
        for (let r = 0; r < e.length; r++) {
          let s = e[r];
          Array.isArray(s) ? El(t, s, n) : ((s = s.replace(kl, t)), n.push(s));
        }
        return n;
      }
      function Tl(t) {
        return (e) => {
          if ("__ngUnwrap__" === e) return t;
          !1 === t(e) && (e.preventDefault(), (e.returnValue = !1));
        };
      }
      let Al = (() => {
        class t {
          constructor(t, e, n) {
            (this.eventManager = t),
              (this.sharedStylesHost = e),
              (this.appId = n),
              (this.rendererByCompId = new Map()),
              (this.defaultRenderer = new Ol(t));
          }
          createRenderer(t, e) {
            if (!t || !e) return this.defaultRenderer;
            switch (e.encapsulation) {
              case Pt.Emulated: {
                let n = this.rendererByCompId.get(e.id);
                return (
                  n ||
                    ((n = new Il(
                      this.eventManager,
                      this.sharedStylesHost,
                      e,
                      this.appId
                    )),
                    this.rendererByCompId.set(e.id, n)),
                  n.applyToHost(t),
                  n
                );
              }
              case 1:
              case Pt.ShadowDom:
                return new Rl(this.eventManager, this.sharedStylesHost, t, e);
              default:
                if (!this.rendererByCompId.has(e.id)) {
                  const t = El(e.id, e.styles, []);
                  this.sharedStylesHost.addStyles(t),
                    this.rendererByCompId.set(e.id, this.defaultRenderer);
                }
                return this.defaultRenderer;
            }
          }
          begin() {}
          end() {}
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(ue(bl), ue(Cl), ue(qo));
          }),
          (t.ɵprov = at({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      class Ol {
        constructor(t) {
          (this.eventManager = t), (this.data = Object.create(null));
        }
        destroy() {}
        createElement(t, e) {
          return e
            ? document.createElementNS(Sl[e] || e, t)
            : document.createElement(t);
        }
        createComment(t) {
          return document.createComment(t);
        }
        createText(t) {
          return document.createTextNode(t);
        }
        appendChild(t, e) {
          t.appendChild(e);
        }
        insertBefore(t, e, n) {
          t && t.insertBefore(e, n);
        }
        removeChild(t, e) {
          t && t.removeChild(e);
        }
        selectRootElement(t, e) {
          let n = "string" == typeof t ? document.querySelector(t) : t;
          if (!n)
            throw new Error(`The selector "${t}" did not match any elements`);
          return e || (n.textContent = ""), n;
        }
        parentNode(t) {
          return t.parentNode;
        }
        nextSibling(t) {
          return t.nextSibling;
        }
        setAttribute(t, e, n, r) {
          if (r) {
            e = r + ":" + e;
            const s = Sl[r];
            s ? t.setAttributeNS(s, e, n) : t.setAttribute(e, n);
          } else t.setAttribute(e, n);
        }
        removeAttribute(t, e, n) {
          if (n) {
            const r = Sl[n];
            r ? t.removeAttributeNS(r, e) : t.removeAttribute(`${n}:${e}`);
          } else t.removeAttribute(e);
        }
        addClass(t, e) {
          t.classList.add(e);
        }
        removeClass(t, e) {
          t.classList.remove(e);
        }
        setStyle(t, e, n, r) {
          r & (lr.DashCase | lr.Important)
            ? t.style.setProperty(e, n, r & lr.Important ? "important" : "")
            : (t.style[e] = n);
        }
        removeStyle(t, e, n) {
          n & lr.DashCase ? t.style.removeProperty(e) : (t.style[e] = "");
        }
        setProperty(t, e, n) {
          t[e] = n;
        }
        setValue(t, e) {
          t.nodeValue = e;
        }
        listen(t, e, n) {
          return "string" == typeof t
            ? this.eventManager.addGlobalEventListener(t, e, Tl(n))
            : this.eventManager.addEventListener(t, e, Tl(n));
        }
      }
      class Il extends Ol {
        constructor(t, e, n, r) {
          super(t), (this.component = n);
          const s = El(r + "-" + n.id, n.styles, []);
          e.addStyles(s),
            (this.contentAttr = "_ngcontent-%COMP%".replace(
              kl,
              r + "-" + n.id
            )),
            (this.hostAttr = "_nghost-%COMP%".replace(kl, r + "-" + n.id));
        }
        applyToHost(t) {
          super.setAttribute(t, this.hostAttr, "");
        }
        createElement(t, e) {
          const n = super.createElement(t, e);
          return super.setAttribute(n, this.contentAttr, ""), n;
        }
      }
      class Rl extends Ol {
        constructor(t, e, n, r) {
          super(t),
            (this.sharedStylesHost = e),
            (this.hostEl = n),
            (this.shadowRoot = n.attachShadow({ mode: "open" })),
            this.sharedStylesHost.addHost(this.shadowRoot);
          const s = El(r.id, r.styles, []);
          for (let i = 0; i < s.length; i++) {
            const t = document.createElement("style");
            (t.textContent = s[i]), this.shadowRoot.appendChild(t);
          }
        }
        nodeOrShadowRoot(t) {
          return t === this.hostEl ? this.shadowRoot : t;
        }
        destroy() {
          this.sharedStylesHost.removeHost(this.shadowRoot);
        }
        appendChild(t, e) {
          return super.appendChild(this.nodeOrShadowRoot(t), e);
        }
        insertBefore(t, e, n) {
          return super.insertBefore(this.nodeOrShadowRoot(t), e, n);
        }
        removeChild(t, e) {
          return super.removeChild(this.nodeOrShadowRoot(t), e);
        }
        parentNode(t) {
          return this.nodeOrShadowRoot(
            super.parentNode(this.nodeOrShadowRoot(t))
          );
        }
      }
      let Pl = (() => {
        class t extends wl {
          constructor(t) {
            super(t);
          }
          supports(t) {
            return !0;
          }
          addEventListener(t, e, n) {
            return (
              t.addEventListener(e, n, !1),
              () => this.removeEventListener(t, e, n)
            );
          }
          removeEventListener(t, e, n) {
            return t.removeEventListener(e, n);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(ue(Fa));
          }),
          (t.ɵprov = at({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const jl = ["alt", "control", "meta", "shift"],
        Nl = {
          "\b": "Backspace",
          "\t": "Tab",
          "\x7f": "Delete",
          "\x1b": "Escape",
          Del: "Delete",
          Esc: "Escape",
          Left: "ArrowLeft",
          Right: "ArrowRight",
          Up: "ArrowUp",
          Down: "ArrowDown",
          Menu: "ContextMenu",
          Scroll: "ScrollLock",
          Win: "OS",
        },
        Ml = {
          A: "1",
          B: "2",
          C: "3",
          D: "4",
          E: "5",
          F: "6",
          G: "7",
          H: "8",
          I: "9",
          J: "*",
          K: "+",
          M: "-",
          N: ".",
          O: "/",
          "`": "0",
          "\x90": "NumLock",
        },
        Ul = {
          alt: (t) => t.altKey,
          control: (t) => t.ctrlKey,
          meta: (t) => t.metaKey,
          shift: (t) => t.shiftKey,
        };
      let Dl = (() => {
        class t extends wl {
          constructor(t) {
            super(t);
          }
          supports(e) {
            return null != t.parseEventName(e);
          }
          addEventListener(e, n, r) {
            const s = t.parseEventName(n),
              i = t.eventCallback(s.fullKey, r, this.manager.getZone());
            return this.manager
              .getZone()
              .runOutsideAngular(() => La().onAndCancel(e, s.domEventName, i));
          }
          static parseEventName(e) {
            const n = e.toLowerCase().split("."),
              r = n.shift();
            if (0 === n.length || ("keydown" !== r && "keyup" !== r))
              return null;
            const s = t._normalizeKey(n.pop());
            let i = "";
            if (
              (jl.forEach((t) => {
                const e = n.indexOf(t);
                e > -1 && (n.splice(e, 1), (i += t + "."));
              }),
              (i += s),
              0 != n.length || 0 === s.length)
            )
              return null;
            const o = {};
            return (o.domEventName = r), (o.fullKey = i), o;
          }
          static getEventFullKey(t) {
            let e = "",
              n = (function (t) {
                let e = t.key;
                if (null == e) {
                  if (((e = t.keyIdentifier), null == e)) return "Unidentified";
                  e.startsWith("U+") &&
                    ((e = String.fromCharCode(parseInt(e.substring(2), 16))),
                    3 === t.location && Ml.hasOwnProperty(e) && (e = Ml[e]));
                }
                return Nl[e] || e;
              })(t);
            return (
              (n = n.toLowerCase()),
              " " === n ? (n = "space") : "." === n && (n = "dot"),
              jl.forEach((r) => {
                r != n && (0, Ul[r])(t) && (e += r + ".");
              }),
              (e += n),
              e
            );
          }
          static eventCallback(e, n, r) {
            return (s) => {
              t.getEventFullKey(s) === e && r.runGuarded(() => n(s));
            };
          }
          static _normalizeKey(t) {
            switch (t) {
              case "esc":
                return "escape";
              default:
                return t;
            }
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(ue(Fa));
          }),
          (t.ɵprov = at({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const Ll = Ca(Na, "browser", [
          { provide: Go, useValue: "browser" },
          {
            provide: Wo,
            useValue: function () {
              pl.makeCurrent(), yl.init();
            },
            multi: !0,
          },
          {
            provide: Fa,
            useFactory: function () {
              return (
                (function (t) {
                  de = t;
                })(document),
                document
              );
            },
            deps: [],
          },
        ]),
        Fl = [
          [],
          { provide: Ps, useValue: "root" },
          {
            provide: sr,
            useFactory: function () {
              return new sr();
            },
            deps: [],
          },
          { provide: _l, useClass: Pl, multi: !0, deps: [Fa, la, Go] },
          { provide: _l, useClass: Dl, multi: !0, deps: [Fa] },
          [],
          { provide: Al, useClass: Al, deps: [bl, Cl, qo] },
          { provide: Oi, useExisting: Al },
          { provide: xl, useExisting: Cl },
          { provide: Cl, useClass: Cl, deps: [Fa] },
          { provide: ma, useClass: ma, deps: [la] },
          { provide: bl, useClass: bl, deps: [_l, la] },
          [],
        ];
      let Hl = (() => {
        class t {
          constructor(t) {
            if (t)
              throw new Error(
                "BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead."
              );
          }
          static withServerTransition(e) {
            return {
              ngModule: t,
              providers: [
                { provide: qo, useValue: e.appId },
                { provide: ml, useExisting: qo },
                vl,
              ],
            };
          }
        }
        return (
          (t.ɵmod = Gt({ type: t })),
          (t.ɵinj = lt({
            factory: function (e) {
              return new (e || t)(ue(t, 12));
            },
            providers: Fl,
            imports: [cl, Ua],
          })),
          t
        );
      })();
      function Vl(...t) {
        let e = t[t.length - 1];
        return k(e) ? (t.pop(), M(t, e)) : z(t);
      }
      "undefined" != typeof window && window;
      class $l extends C {
        constructor(t) {
          super(), (this._value = t);
        }
        get value() {
          return this.getValue();
        }
        _subscribe(t) {
          const e = super._subscribe(t);
          return e && !e.closed && t.next(this._value), e;
        }
        getValue() {
          if (this.hasError) throw this.thrownError;
          if (this.closed) throw new b();
          return this._value;
        }
        next(t) {
          super.next((this._value = t));
        }
      }
      class ql extends f {
        notifyNext(t, e, n, r, s) {
          this.destination.next(e);
        }
        notifyError(t, e) {
          this.destination.error(t);
        }
        notifyComplete(t) {
          this.destination.complete();
        }
      }
      class zl extends f {
        constructor(t, e, n) {
          super(),
            (this.parent = t),
            (this.outerValue = e),
            (this.outerIndex = n),
            (this.index = 0);
        }
        _next(t) {
          this.parent.notifyNext(
            this.outerValue,
            t,
            this.outerIndex,
            this.index++,
            this
          );
        }
        _error(t) {
          this.parent.notifyError(t, this), this.unsubscribe();
        }
        _complete() {
          this.parent.notifyComplete(this), this.unsubscribe();
        }
      }
      function Bl(t, e, n, r, s = new zl(t, n, r)) {
        if (!s.closed) return e instanceof y ? e.subscribe(s) : N(e)(s);
      }
      const Wl = {};
      class Gl {
        constructor(t) {
          this.resultSelector = t;
        }
        call(t, e) {
          return e.subscribe(new Zl(t, this.resultSelector));
        }
      }
      class Zl extends ql {
        constructor(t, e) {
          super(t),
            (this.resultSelector = e),
            (this.active = 0),
            (this.values = []),
            (this.observables = []);
        }
        _next(t) {
          this.values.push(Wl), this.observables.push(t);
        }
        _complete() {
          const t = this.observables,
            e = t.length;
          if (0 === e) this.destination.complete();
          else {
            (this.active = e), (this.toRespond = e);
            for (let n = 0; n < e; n++) this.add(Bl(this, t[n], void 0, n));
          }
        }
        notifyComplete(t) {
          0 == (this.active -= 1) && this.destination.complete();
        }
        notifyNext(t, e, n) {
          const r = this.values,
            s = this.toRespond
              ? r[n] === Wl
                ? --this.toRespond
                : this.toRespond
              : 0;
          (r[n] = e),
            0 === s &&
              (this.resultSelector
                ? this._tryResultSelector(r)
                : this.destination.next(r.slice()));
        }
        _tryResultSelector(t) {
          let e;
          try {
            e = this.resultSelector.apply(this, t);
          } catch (n) {
            return void this.destination.error(n);
          }
          this.destination.next(e);
        }
      }
      const Ql = (() => {
          function t() {
            return (
              Error.call(this),
              (this.message = "no elements in sequence"),
              (this.name = "EmptyError"),
              this
            );
          }
          return (t.prototype = Object.create(Error.prototype)), t;
        })(),
        Jl = new y((t) => t.complete());
      function Yl(t) {
        return t
          ? (function (t) {
              return new y((e) => t.schedule(() => e.complete()));
            })(t)
          : Jl;
      }
      function Kl(t) {
        return new y((e) => {
          let n;
          try {
            n = t();
          } catch (r) {
            return void e.error(r);
          }
          return (n ? U(n) : Yl()).subscribe(e);
        });
      }
      function Xl() {
        return q(1);
      }
      function tc(t, e) {
        return function (n) {
          return n.lift(new ec(t, e));
        };
      }
      class ec {
        constructor(t, e) {
          (this.predicate = t), (this.thisArg = e);
        }
        call(t, e) {
          return e.subscribe(new nc(t, this.predicate, this.thisArg));
        }
      }
      class nc extends f {
        constructor(t, e, n) {
          super(t), (this.predicate = e), (this.thisArg = n), (this.count = 0);
        }
        _next(t) {
          let e;
          try {
            e = this.predicate.call(this.thisArg, t, this.count++);
          } catch (n) {
            return void this.destination.error(n);
          }
          e && this.destination.next(t);
        }
      }
      const rc = (() => {
        function t() {
          return (
            Error.call(this),
            (this.message = "argument out of range"),
            (this.name = "ArgumentOutOfRangeError"),
            this
          );
        }
        return (t.prototype = Object.create(Error.prototype)), t;
      })();
      function sc(t) {
        return function (e) {
          return 0 === t ? Yl() : e.lift(new ic(t));
        };
      }
      class ic {
        constructor(t) {
          if (((this.total = t), this.total < 0)) throw new rc();
        }
        call(t, e) {
          return e.subscribe(new oc(t, this.total));
        }
      }
      class oc extends f {
        constructor(t, e) {
          super(t),
            (this.total = e),
            (this.ring = new Array()),
            (this.count = 0);
        }
        _next(t) {
          const e = this.ring,
            n = this.total,
            r = this.count++;
          e.length < n ? e.push(t) : (e[r % n] = t);
        }
        _complete() {
          const t = this.destination;
          let e = this.count;
          if (e > 0) {
            const n = this.count >= this.total ? this.total : this.count,
              r = this.ring;
            for (let s = 0; s < n; s++) {
              const s = e++ % n;
              t.next(r[s]);
            }
          }
          t.complete();
        }
      }
      function ac(t = uc) {
        return (e) => e.lift(new lc(t));
      }
      class lc {
        constructor(t) {
          this.errorFactory = t;
        }
        call(t, e) {
          return e.subscribe(new cc(t, this.errorFactory));
        }
      }
      class cc extends f {
        constructor(t, e) {
          super(t), (this.errorFactory = e), (this.hasValue = !1);
        }
        _next(t) {
          (this.hasValue = !0), this.destination.next(t);
        }
        _complete() {
          if (this.hasValue) return this.destination.complete();
          {
            let e;
            try {
              e = this.errorFactory();
            } catch (t) {
              e = t;
            }
            this.destination.error(e);
          }
        }
      }
      function uc() {
        return new Ql();
      }
      function hc(t = null) {
        return (e) => e.lift(new dc(t));
      }
      class dc {
        constructor(t) {
          this.defaultValue = t;
        }
        call(t, e) {
          return e.subscribe(new pc(t, this.defaultValue));
        }
      }
      class pc extends f {
        constructor(t, e) {
          super(t), (this.defaultValue = e), (this.isEmpty = !0);
        }
        _next(t) {
          (this.isEmpty = !1), this.destination.next(t);
        }
        _complete() {
          this.isEmpty && this.destination.next(this.defaultValue),
            this.destination.complete();
        }
      }
      function fc(t, e) {
        return "function" == typeof e
          ? (n) =>
              n.pipe(fc((n, r) => U(t(n, r)).pipe(E((t, s) => e(n, t, r, s)))))
          : (e) => e.lift(new gc(t));
      }
      class gc {
        constructor(t) {
          this.project = t;
        }
        call(t, e) {
          return e.subscribe(new mc(t, this.project));
        }
      }
      class mc extends L {
        constructor(t, e) {
          super(t), (this.project = e), (this.index = 0);
        }
        _next(t) {
          let e;
          const n = this.index++;
          try {
            e = this.project(t, n);
          } catch (r) {
            return void this.destination.error(r);
          }
          this._innerSub(e);
        }
        _innerSub(t) {
          const e = this.innerSubscription;
          e && e.unsubscribe();
          const n = new D(this),
            r = this.destination;
          r.add(n),
            (this.innerSubscription = F(t, n)),
            this.innerSubscription !== n && r.add(this.innerSubscription);
        }
        _complete() {
          const { innerSubscription: t } = this;
          (t && !t.closed) || super._complete(), this.unsubscribe();
        }
        _unsubscribe() {
          this.innerSubscription = void 0;
        }
        notifyComplete() {
          (this.innerSubscription = void 0),
            this.isStopped && super._complete();
        }
        notifyNext(t) {
          this.destination.next(t);
        }
      }
      function vc(t) {
        return (e) => (0 === t ? Yl() : e.lift(new yc(t)));
      }
      class yc {
        constructor(t) {
          if (((this.total = t), this.total < 0)) throw new rc();
        }
        call(t, e) {
          return e.subscribe(new _c(t, this.total));
        }
      }
      class _c extends f {
        constructor(t, e) {
          super(t), (this.total = e), (this.count = 0);
        }
        _next(t) {
          const e = this.total,
            n = ++this.count;
          n <= e &&
            (this.destination.next(t),
            n === e && (this.destination.complete(), this.unsubscribe()));
        }
      }
      function bc(...t) {
        return Xl()(Vl(...t));
      }
      class wc {
        constructor(t, e, n = !1) {
          (this.accumulator = t), (this.seed = e), (this.hasSeed = n);
        }
        call(t, e) {
          return e.subscribe(
            new xc(t, this.accumulator, this.seed, this.hasSeed)
          );
        }
      }
      class xc extends f {
        constructor(t, e, n, r) {
          super(t),
            (this.accumulator = e),
            (this._seed = n),
            (this.hasSeed = r),
            (this.index = 0);
        }
        get seed() {
          return this._seed;
        }
        set seed(t) {
          (this.hasSeed = !0), (this._seed = t);
        }
        _next(t) {
          if (this.hasSeed) return this._tryNext(t);
          (this.seed = t), this.destination.next(t);
        }
        _tryNext(t) {
          const e = this.index++;
          let n;
          try {
            n = this.accumulator(this.seed, t, e);
          } catch (r) {
            this.destination.error(r);
          }
          (this.seed = n), this.destination.next(n);
        }
      }
      function Cc(t) {
        return function (e) {
          const n = new Sc(t),
            r = e.lift(n);
          return (n.caught = r);
        };
      }
      class Sc {
        constructor(t) {
          this.selector = t;
        }
        call(t, e) {
          return e.subscribe(new kc(t, this.selector, this.caught));
        }
      }
      class kc extends L {
        constructor(t, e, n) {
          super(t), (this.selector = e), (this.caught = n);
        }
        error(t) {
          if (!this.isStopped) {
            let n;
            try {
              n = this.selector(t, this.caught);
            } catch (e) {
              return void super.error(e);
            }
            this._unsubscribeAndRecycle();
            const r = new D(this);
            this.add(r);
            const s = F(n, r);
            s !== r && this.add(s);
          }
        }
      }
      function Ec(t, e) {
        return H(t, e, 1);
      }
      function Tc(t, e) {
        const n = arguments.length >= 2;
        return (r) =>
          r.pipe(
            t ? tc((e, n) => t(e, n, r)) : v,
            vc(1),
            n ? hc(e) : ac(() => new Ql())
          );
      }
      function Ac() {}
      function Oc(t, e, n) {
        return function (r) {
          return r.lift(new Ic(t, e, n));
        };
      }
      class Ic {
        constructor(t, e, n) {
          (this.nextOrObserver = t), (this.error = e), (this.complete = n);
        }
        call(t, e) {
          return e.subscribe(
            new Rc(t, this.nextOrObserver, this.error, this.complete)
          );
        }
      }
      class Rc extends f {
        constructor(t, e, n, s) {
          super(t),
            (this._tapNext = Ac),
            (this._tapError = Ac),
            (this._tapComplete = Ac),
            (this._tapError = n || Ac),
            (this._tapComplete = s || Ac),
            r(e)
              ? ((this._context = this), (this._tapNext = e))
              : e &&
                ((this._context = e),
                (this._tapNext = e.next || Ac),
                (this._tapError = e.error || Ac),
                (this._tapComplete = e.complete || Ac));
        }
        _next(t) {
          try {
            this._tapNext.call(this._context, t);
          } catch (e) {
            return void this.destination.error(e);
          }
          this.destination.next(t);
        }
        _error(t) {
          try {
            this._tapError.call(this._context, t);
          } catch (t) {
            return void this.destination.error(t);
          }
          this.destination.error(t);
        }
        _complete() {
          try {
            this._tapComplete.call(this._context);
          } catch (t) {
            return void this.destination.error(t);
          }
          return this.destination.complete();
        }
      }
      class Pc {
        constructor(t) {
          this.callback = t;
        }
        call(t, e) {
          return e.subscribe(new jc(t, this.callback));
        }
      }
      class jc extends f {
        constructor(t, e) {
          super(t), this.add(new h(e));
        }
      }
      class Nc {
        constructor(t, e) {
          (this.id = t), (this.url = e);
        }
      }
      class Mc extends Nc {
        constructor(t, e, n = "imperative", r = null) {
          super(t, e), (this.navigationTrigger = n), (this.restoredState = r);
        }
        toString() {
          return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class Uc extends Nc {
        constructor(t, e, n) {
          super(t, e), (this.urlAfterRedirects = n);
        }
        toString() {
          return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
        }
      }
      class Dc extends Nc {
        constructor(t, e, n) {
          super(t, e), (this.reason = n);
        }
        toString() {
          return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class Lc extends Nc {
        constructor(t, e, n) {
          super(t, e), (this.error = n);
        }
        toString() {
          return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
        }
      }
      class Fc extends Nc {
        constructor(t, e, n, r) {
          super(t, e), (this.urlAfterRedirects = n), (this.state = r);
        }
        toString() {
          return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Hc extends Nc {
        constructor(t, e, n, r) {
          super(t, e), (this.urlAfterRedirects = n), (this.state = r);
        }
        toString() {
          return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Vc extends Nc {
        constructor(t, e, n, r, s) {
          super(t, e),
            (this.urlAfterRedirects = n),
            (this.state = r),
            (this.shouldActivate = s);
        }
        toString() {
          return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
        }
      }
      class $c extends Nc {
        constructor(t, e, n, r) {
          super(t, e), (this.urlAfterRedirects = n), (this.state = r);
        }
        toString() {
          return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class qc extends Nc {
        constructor(t, e, n, r) {
          super(t, e), (this.urlAfterRedirects = n), (this.state = r);
        }
        toString() {
          return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class zc {
        constructor(t) {
          this.route = t;
        }
        toString() {
          return `RouteConfigLoadStart(path: ${this.route.path})`;
        }
      }
      class Bc {
        constructor(t) {
          this.route = t;
        }
        toString() {
          return `RouteConfigLoadEnd(path: ${this.route.path})`;
        }
      }
      class Wc {
        constructor(t) {
          this.snapshot = t;
        }
        toString() {
          return `ChildActivationStart(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class Gc {
        constructor(t) {
          this.snapshot = t;
        }
        toString() {
          return `ChildActivationEnd(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class Zc {
        constructor(t) {
          this.snapshot = t;
        }
        toString() {
          return `ActivationStart(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class Qc {
        constructor(t) {
          this.snapshot = t;
        }
        toString() {
          return `ActivationEnd(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class Jc {
        constructor(t, e, n) {
          (this.routerEvent = t), (this.position = e), (this.anchor = n);
        }
        toString() {
          return `Scroll(anchor: '${this.anchor}', position: '${
            this.position ? `${this.position[0]}, ${this.position[1]}` : null
          }')`;
        }
      }
      class Yc {
        constructor(t) {
          this.params = t || {};
        }
        has(t) {
          return Object.prototype.hasOwnProperty.call(this.params, t);
        }
        get(t) {
          if (this.has(t)) {
            const e = this.params[t];
            return Array.isArray(e) ? e[0] : e;
          }
          return null;
        }
        getAll(t) {
          if (this.has(t)) {
            const e = this.params[t];
            return Array.isArray(e) ? e : [e];
          }
          return [];
        }
        get keys() {
          return Object.keys(this.params);
        }
      }
      function Kc(t) {
        return new Yc(t);
      }
      function Xc(t) {
        const e = Error("NavigationCancelingError: " + t);
        return (e.ngNavigationCancelingError = !0), e;
      }
      function tu(t, e, n) {
        const r = n.path.split("/");
        if (r.length > t.length) return null;
        if ("full" === n.pathMatch && (e.hasChildren() || r.length < t.length))
          return null;
        const s = {};
        for (let i = 0; i < r.length; i++) {
          const e = r[i],
            n = t[i];
          if (e.startsWith(":")) s[e.substring(1)] = n;
          else if (e !== n.path) return null;
        }
        return { consumed: t.slice(0, r.length), posParams: s };
      }
      function eu(t, e) {
        const n = Object.keys(t),
          r = Object.keys(e);
        if (!n || !r || n.length != r.length) return !1;
        let s;
        for (let i = 0; i < n.length; i++)
          if (((s = n[i]), !nu(t[s], e[s]))) return !1;
        return !0;
      }
      function nu(t, e) {
        if (Array.isArray(t) && Array.isArray(e)) {
          if (t.length !== e.length) return !1;
          const n = [...t].sort(),
            r = [...e].sort();
          return n.every((t, e) => r[e] === t);
        }
        return t === e;
      }
      function ru(t) {
        return Array.prototype.concat.apply([], t);
      }
      function su(t) {
        return t.length > 0 ? t[t.length - 1] : null;
      }
      function iu(t, e) {
        for (const n in t) t.hasOwnProperty(n) && e(t[n], n);
      }
      function ou(t) {
        return (e = t) && "function" == typeof e.subscribe
          ? t
          : ai(t)
          ? U(Promise.resolve(t))
          : Vl(t);
        var e;
      }
      function au(t, e, n) {
        return n
          ? (function (t, e) {
              return eu(t, e);
            })(t.queryParams, e.queryParams) && lu(t.root, e.root)
          : (function (t, e) {
              return (
                Object.keys(e).length <= Object.keys(t).length &&
                Object.keys(e).every((n) => nu(t[n], e[n]))
              );
            })(t.queryParams, e.queryParams) && cu(t.root, e.root);
      }
      function lu(t, e) {
        if (!fu(t.segments, e.segments)) return !1;
        if (t.numberOfChildren !== e.numberOfChildren) return !1;
        for (const n in e.children) {
          if (!t.children[n]) return !1;
          if (!lu(t.children[n], e.children[n])) return !1;
        }
        return !0;
      }
      function cu(t, e) {
        return uu(t, e, e.segments);
      }
      function uu(t, e, n) {
        if (t.segments.length > n.length)
          return !!fu(t.segments.slice(0, n.length), n) && !e.hasChildren();
        if (t.segments.length === n.length) {
          if (!fu(t.segments, n)) return !1;
          for (const n in e.children) {
            if (!t.children[n]) return !1;
            if (!cu(t.children[n], e.children[n])) return !1;
          }
          return !0;
        }
        {
          const r = n.slice(0, t.segments.length),
            s = n.slice(t.segments.length);
          return (
            !!fu(t.segments, r) &&
            !!t.children.primary &&
            uu(t.children.primary, e, s)
          );
        }
      }
      class hu {
        constructor(t, e, n) {
          (this.root = t), (this.queryParams = e), (this.fragment = n);
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = Kc(this.queryParams)),
            this._queryParamMap
          );
        }
        toString() {
          return yu.serialize(this);
        }
      }
      class du {
        constructor(t, e) {
          (this.segments = t),
            (this.children = e),
            (this.parent = null),
            iu(e, (t, e) => (t.parent = this));
        }
        hasChildren() {
          return this.numberOfChildren > 0;
        }
        get numberOfChildren() {
          return Object.keys(this.children).length;
        }
        toString() {
          return _u(this);
        }
      }
      class pu {
        constructor(t, e) {
          (this.path = t), (this.parameters = e);
        }
        get parameterMap() {
          return (
            this._parameterMap || (this._parameterMap = Kc(this.parameters)),
            this._parameterMap
          );
        }
        toString() {
          return Eu(this);
        }
      }
      function fu(t, e) {
        return t.length === e.length && t.every((t, n) => t.path === e[n].path);
      }
      function gu(t, e) {
        let n = [];
        return (
          iu(t.children, (t, r) => {
            "primary" === r && (n = n.concat(e(t, r)));
          }),
          iu(t.children, (t, r) => {
            "primary" !== r && (n = n.concat(e(t, r)));
          }),
          n
        );
      }
      class mu {}
      class vu {
        parse(t) {
          const e = new Ru(t);
          return new hu(
            e.parseRootSegment(),
            e.parseQueryParams(),
            e.parseFragment()
          );
        }
        serialize(t) {
          return `${"/" + bu(t.root, !0)}${(function (t) {
            const e = Object.keys(t).map((e) => {
              const n = t[e];
              return Array.isArray(n)
                ? n.map((t) => `${xu(e)}=${xu(t)}`).join("&")
                : `${xu(e)}=${xu(n)}`;
            });
            return e.length ? "?" + e.join("&") : "";
          })(t.queryParams)}${
            "string" == typeof t.fragment ? "#" + encodeURI(t.fragment) : ""
          }`;
        }
      }
      const yu = new vu();
      function _u(t) {
        return t.segments.map((t) => Eu(t)).join("/");
      }
      function bu(t, e) {
        if (!t.hasChildren()) return _u(t);
        if (e) {
          const e = t.children.primary ? bu(t.children.primary, !1) : "",
            n = [];
          return (
            iu(t.children, (t, e) => {
              "primary" !== e && n.push(`${e}:${bu(t, !1)}`);
            }),
            n.length > 0 ? `${e}(${n.join("//")})` : e
          );
        }
        {
          const e = gu(t, (e, n) =>
            "primary" === n
              ? [bu(t.children.primary, !1)]
              : [`${n}:${bu(e, !1)}`]
          );
          return 1 === Object.keys(t.children).length &&
            null != t.children.primary
            ? `${_u(t)}/${e[0]}`
            : `${_u(t)}/(${e.join("//")})`;
        }
      }
      function wu(t) {
        return encodeURIComponent(t)
          .replace(/%40/g, "@")
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",");
      }
      function xu(t) {
        return wu(t).replace(/%3B/gi, ";");
      }
      function Cu(t) {
        return wu(t)
          .replace(/\(/g, "%28")
          .replace(/\)/g, "%29")
          .replace(/%26/gi, "&");
      }
      function Su(t) {
        return decodeURIComponent(t);
      }
      function ku(t) {
        return Su(t.replace(/\+/g, "%20"));
      }
      function Eu(t) {
        return `${Cu(t.path)}${
          ((e = t.parameters),
          Object.keys(e)
            .map((t) => `;${Cu(t)}=${Cu(e[t])}`)
            .join(""))
        }`;
        var e;
      }
      const Tu = /^[^\/()?;=#]+/;
      function Au(t) {
        const e = t.match(Tu);
        return e ? e[0] : "";
      }
      const Ou = /^[^=?&#]+/,
        Iu = /^[^?&#]+/;
      class Ru {
        constructor(t) {
          (this.url = t), (this.remaining = t);
        }
        parseRootSegment() {
          return (
            this.consumeOptional("/"),
            "" === this.remaining ||
            this.peekStartsWith("?") ||
            this.peekStartsWith("#")
              ? new du([], {})
              : new du([], this.parseChildren())
          );
        }
        parseQueryParams() {
          const t = {};
          if (this.consumeOptional("?"))
            do {
              this.parseQueryParam(t);
            } while (this.consumeOptional("&"));
          return t;
        }
        parseFragment() {
          return this.consumeOptional("#")
            ? decodeURIComponent(this.remaining)
            : null;
        }
        parseChildren() {
          if ("" === this.remaining) return {};
          this.consumeOptional("/");
          const t = [];
          for (
            this.peekStartsWith("(") || t.push(this.parseSegment());
            this.peekStartsWith("/") &&
            !this.peekStartsWith("//") &&
            !this.peekStartsWith("/(");

          )
            this.capture("/"), t.push(this.parseSegment());
          let e = {};
          this.peekStartsWith("/(") &&
            (this.capture("/"), (e = this.parseParens(!0)));
          let n = {};
          return (
            this.peekStartsWith("(") && (n = this.parseParens(!1)),
            (t.length > 0 || Object.keys(e).length > 0) &&
              (n.primary = new du(t, e)),
            n
          );
        }
        parseSegment() {
          const t = Au(this.remaining);
          if ("" === t && this.peekStartsWith(";"))
            throw new Error(
              `Empty path url segment cannot have parameters: '${this.remaining}'.`
            );
          return this.capture(t), new pu(Su(t), this.parseMatrixParams());
        }
        parseMatrixParams() {
          const t = {};
          for (; this.consumeOptional(";"); ) this.parseParam(t);
          return t;
        }
        parseParam(t) {
          const e = Au(this.remaining);
          if (!e) return;
          this.capture(e);
          let n = "";
          if (this.consumeOptional("=")) {
            const t = Au(this.remaining);
            t && ((n = t), this.capture(n));
          }
          t[Su(e)] = Su(n);
        }
        parseQueryParam(t) {
          const e = (function (t) {
            const e = t.match(Ou);
            return e ? e[0] : "";
          })(this.remaining);
          if (!e) return;
          this.capture(e);
          let n = "";
          if (this.consumeOptional("=")) {
            const t = (function (t) {
              const e = t.match(Iu);
              return e ? e[0] : "";
            })(this.remaining);
            t && ((n = t), this.capture(n));
          }
          const r = ku(e),
            s = ku(n);
          if (t.hasOwnProperty(r)) {
            let e = t[r];
            Array.isArray(e) || ((e = [e]), (t[r] = e)), e.push(s);
          } else t[r] = s;
        }
        parseParens(t) {
          const e = {};
          for (
            this.capture("(");
            !this.consumeOptional(")") && this.remaining.length > 0;

          ) {
            const n = Au(this.remaining),
              r = this.remaining[n.length];
            if ("/" !== r && ")" !== r && ";" !== r)
              throw new Error(`Cannot parse url '${this.url}'`);
            let s = void 0;
            n.indexOf(":") > -1
              ? ((s = n.substr(0, n.indexOf(":"))),
                this.capture(s),
                this.capture(":"))
              : t && (s = "primary");
            const i = this.parseChildren();
            (e[s] = 1 === Object.keys(i).length ? i.primary : new du([], i)),
              this.consumeOptional("//");
          }
          return e;
        }
        peekStartsWith(t) {
          return this.remaining.startsWith(t);
        }
        consumeOptional(t) {
          return (
            !!this.peekStartsWith(t) &&
            ((this.remaining = this.remaining.substring(t.length)), !0)
          );
        }
        capture(t) {
          if (!this.consumeOptional(t)) throw new Error(`Expected "${t}".`);
        }
      }
      class Pu {
        constructor(t) {
          this._root = t;
        }
        get root() {
          return this._root.value;
        }
        parent(t) {
          const e = this.pathFromRoot(t);
          return e.length > 1 ? e[e.length - 2] : null;
        }
        children(t) {
          const e = ju(t, this._root);
          return e ? e.children.map((t) => t.value) : [];
        }
        firstChild(t) {
          const e = ju(t, this._root);
          return e && e.children.length > 0 ? e.children[0].value : null;
        }
        siblings(t) {
          const e = Nu(t, this._root);
          return e.length < 2
            ? []
            : e[e.length - 2].children
                .map((t) => t.value)
                .filter((e) => e !== t);
        }
        pathFromRoot(t) {
          return Nu(t, this._root).map((t) => t.value);
        }
      }
      function ju(t, e) {
        if (t === e.value) return e;
        for (const n of e.children) {
          const e = ju(t, n);
          if (e) return e;
        }
        return null;
      }
      function Nu(t, e) {
        if (t === e.value) return [e];
        for (const n of e.children) {
          const r = Nu(t, n);
          if (r.length) return r.unshift(e), r;
        }
        return [];
      }
      class Mu {
        constructor(t, e) {
          (this.value = t), (this.children = e);
        }
        toString() {
          return `TreeNode(${this.value})`;
        }
      }
      function Uu(t) {
        const e = {};
        return t && t.children.forEach((t) => (e[t.value.outlet] = t)), e;
      }
      class Du extends Pu {
        constructor(t, e) {
          super(t), (this.snapshot = e), qu(this, t);
        }
        toString() {
          return this.snapshot.toString();
        }
      }
      function Lu(t, e) {
        const n = (function (t, e) {
            const n = new Vu(
              [],
              {},
              {},
              "",
              {},
              "primary",
              e,
              null,
              t.root,
              -1,
              {}
            );
            return new $u("", new Mu(n, []));
          })(t, e),
          r = new $l([new pu("", {})]),
          s = new $l({}),
          i = new $l({}),
          o = new $l({}),
          a = new $l(""),
          l = new Fu(r, s, o, a, i, "primary", e, n.root);
        return (l.snapshot = n.root), new Du(new Mu(l, []), n);
      }
      class Fu {
        constructor(t, e, n, r, s, i, o, a) {
          (this.url = t),
            (this.params = e),
            (this.queryParams = n),
            (this.fragment = r),
            (this.data = s),
            (this.outlet = i),
            (this.component = o),
            (this._futureSnapshot = a);
        }
        get routeConfig() {
          return this._futureSnapshot.routeConfig;
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return (
            this._paramMap ||
              (this._paramMap = this.params.pipe(E((t) => Kc(t)))),
            this._paramMap
          );
        }
        get queryParamMap() {
          return (
            this._queryParamMap ||
              (this._queryParamMap = this.queryParams.pipe(E((t) => Kc(t)))),
            this._queryParamMap
          );
        }
        toString() {
          return this.snapshot
            ? this.snapshot.toString()
            : `Future(${this._futureSnapshot})`;
        }
      }
      function Hu(t, e = "emptyOnly") {
        const n = t.pathFromRoot;
        let r = 0;
        if ("always" !== e)
          for (r = n.length - 1; r >= 1; ) {
            const t = n[r],
              e = n[r - 1];
            if (t.routeConfig && "" === t.routeConfig.path) r--;
            else {
              if (e.component) break;
              r--;
            }
          }
        return (function (t) {
          return t.reduce(
            (t, e) => ({
              params: Object.assign(Object.assign({}, t.params), e.params),
              data: Object.assign(Object.assign({}, t.data), e.data),
              resolve: Object.assign(
                Object.assign({}, t.resolve),
                e._resolvedData
              ),
            }),
            { params: {}, data: {}, resolve: {} }
          );
        })(n.slice(r));
      }
      class Vu {
        constructor(t, e, n, r, s, i, o, a, l, c, u) {
          (this.url = t),
            (this.params = e),
            (this.queryParams = n),
            (this.fragment = r),
            (this.data = s),
            (this.outlet = i),
            (this.component = o),
            (this.routeConfig = a),
            (this._urlSegment = l),
            (this._lastPathIndex = c),
            (this._resolve = u);
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return (
            this._paramMap || (this._paramMap = Kc(this.params)), this._paramMap
          );
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = Kc(this.queryParams)),
            this._queryParamMap
          );
        }
        toString() {
          return `Route(url:'${this.url
            .map((t) => t.toString())
            .join("/")}', path:'${
            this.routeConfig ? this.routeConfig.path : ""
          }')`;
        }
      }
      class $u extends Pu {
        constructor(t, e) {
          super(e), (this.url = t), qu(this, e);
        }
        toString() {
          return zu(this._root);
        }
      }
      function qu(t, e) {
        (e.value._routerState = t), e.children.forEach((e) => qu(t, e));
      }
      function zu(t) {
        const e =
          t.children.length > 0 ? ` { ${t.children.map(zu).join(", ")} } ` : "";
        return `${t.value}${e}`;
      }
      function Bu(t) {
        if (t.snapshot) {
          const e = t.snapshot,
            n = t._futureSnapshot;
          (t.snapshot = n),
            eu(e.queryParams, n.queryParams) ||
              t.queryParams.next(n.queryParams),
            e.fragment !== n.fragment && t.fragment.next(n.fragment),
            eu(e.params, n.params) || t.params.next(n.params),
            (function (t, e) {
              if (t.length !== e.length) return !1;
              for (let n = 0; n < t.length; ++n) if (!eu(t[n], e[n])) return !1;
              return !0;
            })(e.url, n.url) || t.url.next(n.url),
            eu(e.data, n.data) || t.data.next(n.data);
        } else
          (t.snapshot = t._futureSnapshot), t.data.next(t._futureSnapshot.data);
      }
      function Wu(t, e) {
        var n, r;
        return (
          eu(t.params, e.params) &&
          fu((n = t.url), (r = e.url)) &&
          n.every((t, e) => eu(t.parameters, r[e].parameters)) &&
          !(!t.parent != !e.parent) &&
          (!t.parent || Wu(t.parent, e.parent))
        );
      }
      function Gu(t, e, n) {
        if (n && t.shouldReuseRoute(e.value, n.value.snapshot)) {
          const r = n.value;
          r._futureSnapshot = e.value;
          const s = (function (t, e, n) {
            return e.children.map((e) => {
              for (const r of n.children)
                if (t.shouldReuseRoute(e.value, r.value.snapshot))
                  return Gu(t, e, r);
              return Gu(t, e);
            });
          })(t, e, n);
          return new Mu(r, s);
        }
        {
          const n = t.retrieve(e.value);
          if (n) {
            const t = n.route;
            return Zu(e, t), t;
          }
          {
            const n = new Fu(
                new $l((r = e.value).url),
                new $l(r.params),
                new $l(r.queryParams),
                new $l(r.fragment),
                new $l(r.data),
                r.outlet,
                r.component,
                r
              ),
              s = e.children.map((e) => Gu(t, e));
            return new Mu(n, s);
          }
        }
        var r;
      }
      function Zu(t, e) {
        if (t.value.routeConfig !== e.value.routeConfig)
          throw new Error(
            "Cannot reattach ActivatedRouteSnapshot created from a different route"
          );
        if (t.children.length !== e.children.length)
          throw new Error(
            "Cannot reattach ActivatedRouteSnapshot with a different number of children"
          );
        e.value._futureSnapshot = t.value;
        for (let n = 0; n < t.children.length; ++n)
          Zu(t.children[n], e.children[n]);
      }
      function Qu(t) {
        return (
          "object" == typeof t && null != t && !t.outlets && !t.segmentPath
        );
      }
      function Ju(t) {
        return "object" == typeof t && null != t && t.outlets;
      }
      function Yu(t, e, n, r, s) {
        let i = {};
        return (
          r &&
            iu(r, (t, e) => {
              i[e] = Array.isArray(t) ? t.map((t) => "" + t) : "" + t;
            }),
          new hu(n.root === t ? e : Ku(n.root, t, e), i, s)
        );
      }
      function Ku(t, e, n) {
        const r = {};
        return (
          iu(t.children, (t, s) => {
            r[s] = t === e ? n : Ku(t, e, n);
          }),
          new du(t.segments, r)
        );
      }
      class Xu {
        constructor(t, e, n) {
          if (
            ((this.isAbsolute = t),
            (this.numberOfDoubleDots = e),
            (this.commands = n),
            t && n.length > 0 && Qu(n[0]))
          )
            throw new Error("Root segment cannot have matrix parameters");
          const r = n.find(Ju);
          if (r && r !== su(n))
            throw new Error("{outlets:{}} has to be the last command");
        }
        toRoot() {
          return (
            this.isAbsolute &&
            1 === this.commands.length &&
            "/" == this.commands[0]
          );
        }
      }
      class th {
        constructor(t, e, n) {
          (this.segmentGroup = t), (this.processChildren = e), (this.index = n);
        }
      }
      function eh(t, e, n) {
        if (
          (t || (t = new du([], {})),
          0 === t.segments.length && t.hasChildren())
        )
          return nh(t, e, n);
        const r = (function (t, e, n) {
            let r = 0,
              s = e;
            const i = { match: !1, pathIndex: 0, commandIndex: 0 };
            for (; s < t.segments.length; ) {
              if (r >= n.length) return i;
              const e = t.segments[s],
                o = n[r];
              if (Ju(o)) break;
              const a = "" + o,
                l = r < n.length - 1 ? n[r + 1] : null;
              if (s > 0 && void 0 === a) break;
              if (a && l && "object" == typeof l && void 0 === l.outlets) {
                if (!oh(a, l, e)) return i;
                r += 2;
              } else {
                if (!oh(a, {}, e)) return i;
                r++;
              }
              s++;
            }
            return { match: !0, pathIndex: s, commandIndex: r };
          })(t, e, n),
          s = n.slice(r.commandIndex);
        if (r.match && r.pathIndex < t.segments.length) {
          const e = new du(t.segments.slice(0, r.pathIndex), {});
          return (
            (e.children.primary = new du(
              t.segments.slice(r.pathIndex),
              t.children
            )),
            nh(e, 0, s)
          );
        }
        return r.match && 0 === s.length
          ? new du(t.segments, {})
          : r.match && !t.hasChildren()
          ? rh(t, e, n)
          : r.match
          ? nh(t, 0, s)
          : rh(t, e, n);
      }
      function nh(t, e, n) {
        if (0 === n.length) return new du(t.segments, {});
        {
          const r = (function (t) {
              return Ju(t[0]) ? t[0].outlets : { primary: t };
            })(n),
            s = {};
          return (
            iu(r, (n, r) => {
              null !== n && (s[r] = eh(t.children[r], e, n));
            }),
            iu(t.children, (t, e) => {
              void 0 === r[e] && (s[e] = t);
            }),
            new du(t.segments, s)
          );
        }
      }
      function rh(t, e, n) {
        const r = t.segments.slice(0, e);
        let s = 0;
        for (; s < n.length; ) {
          const i = n[s];
          if (Ju(i)) {
            const t = sh(i.outlets);
            return new du(r, t);
          }
          if (0 === s && Qu(n[0])) {
            r.push(new pu(t.segments[e].path, n[0])), s++;
            continue;
          }
          const o = Ju(i) ? i.outlets.primary : "" + i,
            a = s < n.length - 1 ? n[s + 1] : null;
          o && a && Qu(a)
            ? (r.push(new pu(o, ih(a))), (s += 2))
            : (r.push(new pu(o, {})), s++);
        }
        return new du(r, {});
      }
      function sh(t) {
        const e = {};
        return (
          iu(t, (t, n) => {
            null !== t && (e[n] = rh(new du([], {}), 0, t));
          }),
          e
        );
      }
      function ih(t) {
        const e = {};
        return iu(t, (t, n) => (e[n] = "" + t)), e;
      }
      function oh(t, e, n) {
        return t == n.path && eu(e, n.parameters);
      }
      class ah {
        constructor(t, e, n, r) {
          (this.routeReuseStrategy = t),
            (this.futureState = e),
            (this.currState = n),
            (this.forwardEvent = r);
        }
        activate(t) {
          const e = this.futureState._root,
            n = this.currState ? this.currState._root : null;
          this.deactivateChildRoutes(e, n, t),
            Bu(this.futureState.root),
            this.activateChildRoutes(e, n, t);
        }
        deactivateChildRoutes(t, e, n) {
          const r = Uu(e);
          t.children.forEach((t) => {
            const e = t.value.outlet;
            this.deactivateRoutes(t, r[e], n), delete r[e];
          }),
            iu(r, (t, e) => {
              this.deactivateRouteAndItsChildren(t, n);
            });
        }
        deactivateRoutes(t, e, n) {
          const r = t.value,
            s = e ? e.value : null;
          if (r === s)
            if (r.component) {
              const s = n.getContext(r.outlet);
              s && this.deactivateChildRoutes(t, e, s.children);
            } else this.deactivateChildRoutes(t, e, n);
          else s && this.deactivateRouteAndItsChildren(e, n);
        }
        deactivateRouteAndItsChildren(t, e) {
          this.routeReuseStrategy.shouldDetach(t.value.snapshot)
            ? this.detachAndStoreRouteSubtree(t, e)
            : this.deactivateRouteAndOutlet(t, e);
        }
        detachAndStoreRouteSubtree(t, e) {
          const n = e.getContext(t.value.outlet);
          if (n && n.outlet) {
            const e = n.outlet.detach(),
              r = n.children.onOutletDeactivated();
            this.routeReuseStrategy.store(t.value.snapshot, {
              componentRef: e,
              route: t,
              contexts: r,
            });
          }
        }
        deactivateRouteAndOutlet(t, e) {
          const n = e.getContext(t.value.outlet);
          if (n) {
            const r = Uu(t),
              s = t.value.component ? n.children : e;
            iu(r, (t, e) => this.deactivateRouteAndItsChildren(t, s)),
              n.outlet &&
                (n.outlet.deactivate(), n.children.onOutletDeactivated());
          }
        }
        activateChildRoutes(t, e, n) {
          const r = Uu(e);
          t.children.forEach((t) => {
            this.activateRoutes(t, r[t.value.outlet], n),
              this.forwardEvent(new Qc(t.value.snapshot));
          }),
            t.children.length && this.forwardEvent(new Gc(t.value.snapshot));
        }
        activateRoutes(t, e, n) {
          const r = t.value,
            s = e ? e.value : null;
          if ((Bu(r), r === s))
            if (r.component) {
              const s = n.getOrCreateContext(r.outlet);
              this.activateChildRoutes(t, e, s.children);
            } else this.activateChildRoutes(t, e, n);
          else if (r.component) {
            const e = n.getOrCreateContext(r.outlet);
            if (this.routeReuseStrategy.shouldAttach(r.snapshot)) {
              const t = this.routeReuseStrategy.retrieve(r.snapshot);
              this.routeReuseStrategy.store(r.snapshot, null),
                e.children.onOutletReAttached(t.contexts),
                (e.attachRef = t.componentRef),
                (e.route = t.route.value),
                e.outlet && e.outlet.attach(t.componentRef, t.route.value),
                lh(t.route);
            } else {
              const n = (function (t) {
                  for (let e = t.parent; e; e = e.parent) {
                    const t = e.routeConfig;
                    if (t && t._loadedConfig) return t._loadedConfig;
                    if (t && t.component) return null;
                  }
                  return null;
                })(r.snapshot),
                s = n ? n.module.componentFactoryResolver : null;
              (e.attachRef = null),
                (e.route = r),
                (e.resolver = s),
                e.outlet && e.outlet.activateWith(r, s),
                this.activateChildRoutes(t, null, e.children);
            }
          } else this.activateChildRoutes(t, null, n);
        }
      }
      function lh(t) {
        Bu(t.value), t.children.forEach(lh);
      }
      class ch {
        constructor(t, e) {
          (this.routes = t), (this.module = e);
        }
      }
      function uh(t) {
        return "function" == typeof t;
      }
      function hh(t) {
        return t instanceof hu;
      }
      const dh = Symbol("INITIAL_VALUE");
      function ph() {
        return fc((t) =>
          (function (...t) {
            let e = void 0,
              n = void 0;
            return (
              k(t[t.length - 1]) && (n = t.pop()),
              "function" == typeof t[t.length - 1] && (e = t.pop()),
              1 === t.length && l(t[0]) && (t = t[0]),
              z(t, n).lift(new Gl(e))
            );
          })(
            ...t.map((t) =>
              t.pipe(
                vc(1),
                (function (...t) {
                  const e = t[t.length - 1];
                  return k(e) ? (t.pop(), (n) => bc(t, n, e)) : (e) => bc(t, e);
                })(dh)
              )
            )
          ).pipe(
            (function (t, e) {
              let n = !1;
              return (
                arguments.length >= 2 && (n = !0),
                function (r) {
                  return r.lift(new wc(t, e, n));
                }
              );
            })((t, e) => {
              let n = !1;
              return e.reduce((t, r, s) => {
                if (t !== dh) return t;
                if ((r === dh && (n = !0), !n)) {
                  if (!1 === r) return r;
                  if (s === e.length - 1 || hh(r)) return r;
                }
                return t;
              }, t);
            }, dh),
            tc((t) => t !== dh),
            E((t) => (hh(t) ? t : !0 === t)),
            vc(1)
          )
        );
      }
      let fh = (() => {
        class t {}
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵcmp = qt({
            type: t,
            selectors: [["ng-component"]],
            decls: 1,
            vars: 0,
            template: function (t, e) {
              1 & t && oi(0, "router-outlet");
            },
            directives: function () {
              return [cd];
            },
            encapsulation: 2,
          })),
          t
        );
      })();
      function gh(t, e = "") {
        for (let n = 0; n < t.length; n++) {
          const r = t[n];
          mh(r, vh(e, r));
        }
      }
      function mh(t, e) {
        t.children && gh(t.children, e);
      }
      function vh(t, e) {
        return e
          ? t || e.path
            ? t && !e.path
              ? t + "/"
              : !t && e.path
              ? e.path
              : `${t}/${e.path}`
            : ""
          : t;
      }
      function yh(t) {
        const e = t.children && t.children.map(yh),
          n = e
            ? Object.assign(Object.assign({}, t), { children: e })
            : Object.assign({}, t);
        return (
          !n.component &&
            (e || n.loadChildren) &&
            n.outlet &&
            "primary" !== n.outlet &&
            (n.component = fh),
          n
        );
      }
      function _h(t) {
        return t.outlet || "primary";
      }
      class bh {
        constructor(t) {
          this.segmentGroup = t || null;
        }
      }
      class wh {
        constructor(t) {
          this.urlTree = t;
        }
      }
      function xh(t) {
        return new y((e) => e.error(new bh(t)));
      }
      function Ch(t) {
        return new y((e) => e.error(new wh(t)));
      }
      function Sh(t) {
        return new y((e) =>
          e.error(
            new Error(
              `Only absolute redirects can have named outlets. redirectTo: '${t}'`
            )
          )
        );
      }
      class kh {
        constructor(t, e, n, r, s) {
          (this.configLoader = e),
            (this.urlSerializer = n),
            (this.urlTree = r),
            (this.config = s),
            (this.allowRedirects = !0),
            (this.ngModule = t.get(oo));
        }
        apply() {
          return this.expandSegmentGroup(
            this.ngModule,
            this.config,
            this.urlTree.root,
            "primary"
          )
            .pipe(
              E((t) =>
                this.createUrlTree(
                  t,
                  this.urlTree.queryParams,
                  this.urlTree.fragment
                )
              )
            )
            .pipe(
              Cc((t) => {
                if (t instanceof wh)
                  return (this.allowRedirects = !1), this.match(t.urlTree);
                if (t instanceof bh) throw this.noMatchError(t);
                throw t;
              })
            );
        }
        match(t) {
          return this.expandSegmentGroup(
            this.ngModule,
            this.config,
            t.root,
            "primary"
          )
            .pipe(E((e) => this.createUrlTree(e, t.queryParams, t.fragment)))
            .pipe(
              Cc((t) => {
                if (t instanceof bh) throw this.noMatchError(t);
                throw t;
              })
            );
        }
        noMatchError(t) {
          return new Error(
            `Cannot match any routes. URL Segment: '${t.segmentGroup}'`
          );
        }
        createUrlTree(t, e, n) {
          const r = t.segments.length > 0 ? new du([], { primary: t }) : t;
          return new hu(r, e, n);
        }
        expandSegmentGroup(t, e, n, r) {
          return 0 === n.segments.length && n.hasChildren()
            ? this.expandChildren(t, e, n).pipe(E((t) => new du([], t)))
            : this.expandSegment(t, n, e, n.segments, r, !0);
        }
        expandChildren(t, e, n) {
          return (function (t, e) {
            if (0 === Object.keys(t).length) return Vl({});
            const n = [],
              r = [],
              s = {};
            return (
              iu(t, (t, i) => {
                const o = e(i, t).pipe(E((t) => (s[i] = t)));
                "primary" === i ? n.push(o) : r.push(o);
              }),
              Vl.apply(null, n.concat(r)).pipe(
                Xl(),
                (function (t, e) {
                  const n = arguments.length >= 2;
                  return (r) =>
                    r.pipe(
                      t ? tc((e, n) => t(e, n, r)) : v,
                      sc(1),
                      n ? hc(e) : ac(() => new Ql())
                    );
                })(),
                E(() => s)
              )
            );
          })(n.children, (n, r) => this.expandSegmentGroup(t, e, r, n));
        }
        expandSegment(t, e, n, r, s, i) {
          const o = (function (t) {
            return t.reduce((t, e) => {
              const n = _h(e);
              return t.has(n) ? t.get(n).push(e) : t.set(n, [e]), t;
            }, new Map());
          })(n);
          o.has(s) || o.set(s, []);
          const a = (n) =>
            U(n).pipe(
              Ec((o) =>
                this.expandSegmentAgainstRoute(t, e, n, o, r, s, i).pipe(
                  Cc((t) => {
                    if (t instanceof bh) return Vl(null);
                    throw t;
                  })
                )
              ),
              Tc((t) => null !== t),
              Cc((t) => {
                if (t instanceof Ql || "EmptyError" === t.name) {
                  if (this.noLeftoversInUrl(e, r, s)) return Vl(new du([], {}));
                  throw new bh(e);
                }
                throw t;
              })
            );
          return U(
            Array.from(o.entries()).map(([t, e]) => {
              const n = a(e);
              return t === s
                ? n
                : n.pipe(
                    E(() => null),
                    Cc(() => Vl(null))
                  );
            })
          ).pipe(
            (t) => t.lift(new Gl(void 0)),
            Tc(),
            E((t) => t.find((t) => null !== t))
          );
        }
        noLeftoversInUrl(t, e, n) {
          return 0 === e.length && !t.children[n];
        }
        expandSegmentAgainstRoute(t, e, n, r, s, i, o) {
          return _h(r) !== i && "" !== r.path
            ? xh(e)
            : void 0 === r.redirectTo
            ? this.matchSegmentAgainstRoute(t, e, r, s)
            : o && this.allowRedirects
            ? this.expandSegmentAgainstRouteUsingRedirect(t, e, n, r, s, i)
            : xh(e);
        }
        expandSegmentAgainstRouteUsingRedirect(t, e, n, r, s, i) {
          return "**" === r.path
            ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(t, n, r, i)
            : this.expandRegularSegmentAgainstRouteUsingRedirect(
                t,
                e,
                n,
                r,
                s,
                i
              );
        }
        expandWildCardWithParamsAgainstRouteUsingRedirect(t, e, n, r) {
          const s = this.applyRedirectCommands([], n.redirectTo, {});
          return n.redirectTo.startsWith("/")
            ? Ch(s)
            : this.lineralizeSegments(n, s).pipe(
                H((n) => {
                  const s = new du(n, {});
                  return this.expandSegment(t, s, e, n, r, !1);
                })
              );
        }
        expandRegularSegmentAgainstRouteUsingRedirect(t, e, n, r, s, i) {
          const {
            matched: o,
            consumedSegments: a,
            lastChild: l,
            positionalParamSegments: c,
          } = Eh(e, r, s);
          if (!o) return xh(e);
          const u = this.applyRedirectCommands(a, r.redirectTo, c);
          return r.redirectTo.startsWith("/")
            ? Ch(u)
            : this.lineralizeSegments(r, u).pipe(
                H((r) =>
                  this.expandSegment(t, e, n, r.concat(s.slice(l)), i, !1)
                )
              );
        }
        matchSegmentAgainstRoute(t, e, n, r) {
          if ("**" === n.path)
            return n.loadChildren
              ? this.configLoader
                  .load(t.injector, n)
                  .pipe(E((t) => ((n._loadedConfig = t), new du(r, {}))))
              : Vl(new du(r, {}));
          const { matched: s, consumedSegments: i, lastChild: o } = Eh(e, n, r);
          if (!s) return xh(e);
          const a = r.slice(o);
          return this.getChildConfig(t, n, r).pipe(
            H((t) => {
              const n = t.module,
                r = t.routes,
                { segmentGroup: s, slicedSegments: o } = (function (
                  t,
                  e,
                  n,
                  r
                ) {
                  return n.length > 0 &&
                    (function (t, e, n) {
                      return n.some((n) => Ah(t, e, n) && "primary" !== _h(n));
                    })(t, n, r)
                    ? {
                        segmentGroup: Th(
                          new du(
                            e,
                            (function (t, e) {
                              const n = {};
                              n.primary = e;
                              for (const r of t)
                                "" === r.path &&
                                  "primary" !== _h(r) &&
                                  (n[_h(r)] = new du([], {}));
                              return n;
                            })(r, new du(n, t.children))
                          )
                        ),
                        slicedSegments: [],
                      }
                    : 0 === n.length &&
                      (function (t, e, n) {
                        return n.some((n) => Ah(t, e, n));
                      })(t, n, r)
                    ? {
                        segmentGroup: Th(
                          new du(
                            t.segments,
                            (function (t, e, n, r) {
                              const s = {};
                              for (const i of n)
                                Ah(t, e, i) &&
                                  !r[_h(i)] &&
                                  (s[_h(i)] = new du([], {}));
                              return Object.assign(Object.assign({}, r), s);
                            })(t, n, r, t.children)
                          )
                        ),
                        slicedSegments: n,
                      }
                    : { segmentGroup: t, slicedSegments: n };
                })(e, i, a, r);
              return 0 === o.length && s.hasChildren()
                ? this.expandChildren(n, r, s).pipe(E((t) => new du(i, t)))
                : 0 === r.length && 0 === o.length
                ? Vl(new du(i, {}))
                : this.expandSegment(n, s, r, o, "primary", !0).pipe(
                    E((t) => new du(i.concat(t.segments), t.children))
                  );
            })
          );
        }
        getChildConfig(t, e, n) {
          return e.children
            ? Vl(new ch(e.children, t))
            : e.loadChildren
            ? void 0 !== e._loadedConfig
              ? Vl(e._loadedConfig)
              : this.runCanLoadGuards(t.injector, e, n).pipe(
                  H((n) =>
                    n
                      ? this.configLoader
                          .load(t.injector, e)
                          .pipe(E((t) => ((e._loadedConfig = t), t)))
                      : (function (t) {
                          return new y((e) =>
                            e.error(
                              Xc(
                                `Cannot load children because the guard of the route "path: '${t.path}'" returned false`
                              )
                            )
                          );
                        })(e)
                  )
                )
            : Vl(new ch([], t));
        }
        runCanLoadGuards(t, e, n) {
          const r = e.canLoad;
          return r && 0 !== r.length
            ? Vl(
                r.map((r) => {
                  const s = t.get(r);
                  let i;
                  if (
                    (function (t) {
                      return t && uh(t.canLoad);
                    })(s)
                  )
                    i = s.canLoad(e, n);
                  else {
                    if (!uh(s)) throw new Error("Invalid CanLoad guard");
                    i = s(e, n);
                  }
                  return ou(i);
                })
              ).pipe(
                ph(),
                Oc((t) => {
                  if (!hh(t)) return;
                  const e = Xc(
                    `Redirecting to "${this.urlSerializer.serialize(t)}"`
                  );
                  throw ((e.url = t), e);
                }),
                E((t) => !0 === t)
              )
            : Vl(!0);
        }
        lineralizeSegments(t, e) {
          let n = [],
            r = e.root;
          for (;;) {
            if (((n = n.concat(r.segments)), 0 === r.numberOfChildren))
              return Vl(n);
            if (r.numberOfChildren > 1 || !r.children.primary)
              return Sh(t.redirectTo);
            r = r.children.primary;
          }
        }
        applyRedirectCommands(t, e, n) {
          return this.applyRedirectCreatreUrlTree(
            e,
            this.urlSerializer.parse(e),
            t,
            n
          );
        }
        applyRedirectCreatreUrlTree(t, e, n, r) {
          const s = this.createSegmentGroup(t, e.root, n, r);
          return new hu(
            s,
            this.createQueryParams(e.queryParams, this.urlTree.queryParams),
            e.fragment
          );
        }
        createQueryParams(t, e) {
          const n = {};
          return (
            iu(t, (t, r) => {
              if ("string" == typeof t && t.startsWith(":")) {
                const s = t.substring(1);
                n[r] = e[s];
              } else n[r] = t;
            }),
            n
          );
        }
        createSegmentGroup(t, e, n, r) {
          const s = this.createSegments(t, e.segments, n, r);
          let i = {};
          return (
            iu(e.children, (e, s) => {
              i[s] = this.createSegmentGroup(t, e, n, r);
            }),
            new du(s, i)
          );
        }
        createSegments(t, e, n, r) {
          return e.map((e) =>
            e.path.startsWith(":")
              ? this.findPosParam(t, e, r)
              : this.findOrReturn(e, n)
          );
        }
        findPosParam(t, e, n) {
          const r = n[e.path.substring(1)];
          if (!r)
            throw new Error(
              `Cannot redirect to '${t}'. Cannot find '${e.path}'.`
            );
          return r;
        }
        findOrReturn(t, e) {
          let n = 0;
          for (const r of e) {
            if (r.path === t.path) return e.splice(n), r;
            n++;
          }
          return t;
        }
      }
      function Eh(t, e, n) {
        if ("" === e.path)
          return "full" === e.pathMatch && (t.hasChildren() || n.length > 0)
            ? {
                matched: !1,
                consumedSegments: [],
                lastChild: 0,
                positionalParamSegments: {},
              }
            : {
                matched: !0,
                consumedSegments: [],
                lastChild: 0,
                positionalParamSegments: {},
              };
        const r = (e.matcher || tu)(n, t, e);
        return r
          ? {
              matched: !0,
              consumedSegments: r.consumed,
              lastChild: r.consumed.length,
              positionalParamSegments: r.posParams,
            }
          : {
              matched: !1,
              consumedSegments: [],
              lastChild: 0,
              positionalParamSegments: {},
            };
      }
      function Th(t) {
        if (1 === t.numberOfChildren && t.children.primary) {
          const e = t.children.primary;
          return new du(t.segments.concat(e.segments), e.children);
        }
        return t;
      }
      function Ah(t, e, n) {
        return (
          (!(t.hasChildren() || e.length > 0) || "full" !== n.pathMatch) &&
          "" === n.path &&
          void 0 !== n.redirectTo
        );
      }
      class Oh {
        constructor(t) {
          (this.path = t), (this.route = this.path[this.path.length - 1]);
        }
      }
      class Ih {
        constructor(t, e) {
          (this.component = t), (this.route = e);
        }
      }
      function Rh(t, e, n) {
        const r = t._root;
        return jh(r, e ? e._root : null, n, [r.value]);
      }
      function Ph(t, e, n) {
        const r = (function (t) {
          if (!t) return null;
          for (let e = t.parent; e; e = e.parent) {
            const t = e.routeConfig;
            if (t && t._loadedConfig) return t._loadedConfig;
          }
          return null;
        })(e);
        return (r ? r.module.injector : n).get(t);
      }
      function jh(
        t,
        e,
        n,
        r,
        s = { canDeactivateChecks: [], canActivateChecks: [] }
      ) {
        const i = Uu(e);
        return (
          t.children.forEach((t) => {
            !(function (
              t,
              e,
              n,
              r,
              s = { canDeactivateChecks: [], canActivateChecks: [] }
            ) {
              const i = t.value,
                o = e ? e.value : null,
                a = n ? n.getContext(t.value.outlet) : null;
              if (o && i.routeConfig === o.routeConfig) {
                const l = (function (t, e, n) {
                  if ("function" == typeof n) return n(t, e);
                  switch (n) {
                    case "pathParamsChange":
                      return !fu(t.url, e.url);
                    case "pathParamsOrQueryParamsChange":
                      return (
                        !fu(t.url, e.url) || !eu(t.queryParams, e.queryParams)
                      );
                    case "always":
                      return !0;
                    case "paramsOrQueryParamsChange":
                      return !Wu(t, e) || !eu(t.queryParams, e.queryParams);
                    case "paramsChange":
                    default:
                      return !Wu(t, e);
                  }
                })(o, i, i.routeConfig.runGuardsAndResolvers);
                l
                  ? s.canActivateChecks.push(new Oh(r))
                  : ((i.data = o.data), (i._resolvedData = o._resolvedData)),
                  jh(t, e, i.component ? (a ? a.children : null) : n, r, s),
                  l &&
                    a &&
                    a.outlet &&
                    a.outlet.isActivated &&
                    s.canDeactivateChecks.push(new Ih(a.outlet.component, o));
              } else
                o && Nh(e, a, s),
                  s.canActivateChecks.push(new Oh(r)),
                  jh(t, null, i.component ? (a ? a.children : null) : n, r, s);
            })(t, i[t.value.outlet], n, r.concat([t.value]), s),
              delete i[t.value.outlet];
          }),
          iu(i, (t, e) => Nh(t, n.getContext(e), s)),
          s
        );
      }
      function Nh(t, e, n) {
        const r = Uu(t),
          s = t.value;
        iu(r, (t, r) => {
          Nh(t, s.component ? (e ? e.children.getContext(r) : null) : e, n);
        }),
          n.canDeactivateChecks.push(
            new Ih(
              s.component && e && e.outlet && e.outlet.isActivated
                ? e.outlet.component
                : null,
              s
            )
          );
      }
      function Mh(t, e) {
        return null !== t && e && e(new Zc(t)), Vl(!0);
      }
      function Uh(t, e) {
        return null !== t && e && e(new Wc(t)), Vl(!0);
      }
      function Dh(t, e, n) {
        const r = e.routeConfig ? e.routeConfig.canActivate : null;
        return r && 0 !== r.length
          ? Vl(
              r.map((r) =>
                Kl(() => {
                  const s = Ph(r, e, n);
                  let i;
                  if (
                    (function (t) {
                      return t && uh(t.canActivate);
                    })(s)
                  )
                    i = ou(s.canActivate(e, t));
                  else {
                    if (!uh(s)) throw new Error("Invalid CanActivate guard");
                    i = ou(s(e, t));
                  }
                  return i.pipe(Tc());
                })
              )
            ).pipe(ph())
          : Vl(!0);
      }
      function Lh(t, e, n) {
        const r = e[e.length - 1],
          s = e
            .slice(0, e.length - 1)
            .reverse()
            .map((t) =>
              (function (t) {
                const e = t.routeConfig ? t.routeConfig.canActivateChild : null;
                return e && 0 !== e.length ? { node: t, guards: e } : null;
              })(t)
            )
            .filter((t) => null !== t)
            .map((e) =>
              Kl(() =>
                Vl(
                  e.guards.map((s) => {
                    const i = Ph(s, e.node, n);
                    let o;
                    if (
                      (function (t) {
                        return t && uh(t.canActivateChild);
                      })(i)
                    )
                      o = ou(i.canActivateChild(r, t));
                    else {
                      if (!uh(i))
                        throw new Error("Invalid CanActivateChild guard");
                      o = ou(i(r, t));
                    }
                    return o.pipe(Tc());
                  })
                ).pipe(ph())
              )
            );
        return Vl(s).pipe(ph());
      }
      class Fh {}
      class Hh {
        constructor(t, e, n, r, s, i) {
          (this.rootComponentType = t),
            (this.config = e),
            (this.urlTree = n),
            (this.url = r),
            (this.paramsInheritanceStrategy = s),
            (this.relativeLinkResolution = i);
        }
        recognize() {
          try {
            const t = qh(
                this.urlTree.root,
                [],
                [],
                this.config,
                this.relativeLinkResolution
              ).segmentGroup,
              e = this.processSegmentGroup(this.config, t, "primary"),
              n = new Vu(
                [],
                Object.freeze({}),
                Object.freeze(Object.assign({}, this.urlTree.queryParams)),
                this.urlTree.fragment,
                {},
                "primary",
                this.rootComponentType,
                null,
                this.urlTree.root,
                -1,
                {}
              ),
              r = new Mu(n, e),
              s = new $u(this.url, r);
            return this.inheritParamsAndData(s._root), Vl(s);
          } catch (t) {
            return new y((e) => e.error(t));
          }
        }
        inheritParamsAndData(t) {
          const e = t.value,
            n = Hu(e, this.paramsInheritanceStrategy);
          (e.params = Object.freeze(n.params)),
            (e.data = Object.freeze(n.data)),
            t.children.forEach((t) => this.inheritParamsAndData(t));
        }
        processSegmentGroup(t, e, n) {
          return 0 === e.segments.length && e.hasChildren()
            ? this.processChildren(t, e)
            : this.processSegment(t, e, e.segments, n);
        }
        processChildren(t, e) {
          const n = gu(e, (e, n) => this.processSegmentGroup(t, e, n));
          return (
            (function (t) {
              const e = {};
              t.forEach((t) => {
                const n = e[t.value.outlet];
                if (n) {
                  const e = n.url.map((t) => t.toString()).join("/"),
                    r = t.value.url.map((t) => t.toString()).join("/");
                  throw new Error(
                    `Two segments cannot have the same outlet name: '${e}' and '${r}'.`
                  );
                }
                e[t.value.outlet] = t.value;
              });
            })(n),
            n.sort((t, e) =>
              "primary" === t.value.outlet
                ? -1
                : "primary" === e.value.outlet
                ? 1
                : t.value.outlet.localeCompare(e.value.outlet)
            ),
            n
          );
        }
        processSegment(t, e, n, r) {
          for (const i of t)
            try {
              return this.processSegmentAgainstRoute(i, e, n, r);
            } catch (s) {
              if (!(s instanceof Fh)) throw s;
            }
          if (this.noLeftoversInUrl(e, n, r)) return [];
          throw new Fh();
        }
        noLeftoversInUrl(t, e, n) {
          return 0 === e.length && !t.children[n];
        }
        processSegmentAgainstRoute(t, e, n, r) {
          if (t.redirectTo) throw new Fh();
          if ((t.outlet || "primary") !== r) throw new Fh();
          let s,
            i = [],
            o = [];
          if ("**" === t.path) {
            const i = n.length > 0 ? su(n).parameters : {};
            s = new Vu(
              n,
              i,
              Object.freeze(Object.assign({}, this.urlTree.queryParams)),
              this.urlTree.fragment,
              Wh(t),
              r,
              t.component,
              t,
              Vh(e),
              $h(e) + n.length,
              Gh(t)
            );
          } else {
            const a = (function (t, e, n) {
              if ("" === e.path) {
                if ("full" === e.pathMatch && (t.hasChildren() || n.length > 0))
                  throw new Fh();
                return { consumedSegments: [], lastChild: 0, parameters: {} };
              }
              const r = (e.matcher || tu)(n, t, e);
              if (!r) throw new Fh();
              const s = {};
              iu(r.posParams, (t, e) => {
                s[e] = t.path;
              });
              const i =
                r.consumed.length > 0
                  ? Object.assign(
                      Object.assign({}, s),
                      r.consumed[r.consumed.length - 1].parameters
                    )
                  : s;
              return {
                consumedSegments: r.consumed,
                lastChild: r.consumed.length,
                parameters: i,
              };
            })(e, t, n);
            (i = a.consumedSegments),
              (o = n.slice(a.lastChild)),
              (s = new Vu(
                i,
                a.parameters,
                Object.freeze(Object.assign({}, this.urlTree.queryParams)),
                this.urlTree.fragment,
                Wh(t),
                r,
                t.component,
                t,
                Vh(e),
                $h(e) + i.length,
                Gh(t)
              ));
          }
          const a = (function (t) {
              return t.children
                ? t.children
                : t.loadChildren
                ? t._loadedConfig.routes
                : [];
            })(t),
            { segmentGroup: l, slicedSegments: c } = qh(
              e,
              i,
              o,
              a,
              this.relativeLinkResolution
            );
          if (0 === c.length && l.hasChildren()) {
            const t = this.processChildren(a, l);
            return [new Mu(s, t)];
          }
          if (0 === a.length && 0 === c.length) return [new Mu(s, [])];
          const u = this.processSegment(a, l, c, "primary");
          return [new Mu(s, u)];
        }
      }
      function Vh(t) {
        let e = t;
        for (; e._sourceSegment; ) e = e._sourceSegment;
        return e;
      }
      function $h(t) {
        let e = t,
          n = e._segmentIndexShift ? e._segmentIndexShift : 0;
        for (; e._sourceSegment; )
          (e = e._sourceSegment),
            (n += e._segmentIndexShift ? e._segmentIndexShift : 0);
        return n - 1;
      }
      function qh(t, e, n, r, s) {
        if (
          n.length > 0 &&
          (function (t, e, n) {
            return n.some((n) => zh(t, e, n) && "primary" !== Bh(n));
          })(t, n, r)
        ) {
          const s = new du(
            e,
            (function (t, e, n, r) {
              const s = {};
              (s.primary = r),
                (r._sourceSegment = t),
                (r._segmentIndexShift = e.length);
              for (const i of n)
                if ("" === i.path && "primary" !== Bh(i)) {
                  const n = new du([], {});
                  (n._sourceSegment = t),
                    (n._segmentIndexShift = e.length),
                    (s[Bh(i)] = n);
                }
              return s;
            })(t, e, r, new du(n, t.children))
          );
          return (
            (s._sourceSegment = t),
            (s._segmentIndexShift = e.length),
            { segmentGroup: s, slicedSegments: [] }
          );
        }
        if (
          0 === n.length &&
          (function (t, e, n) {
            return n.some((n) => zh(t, e, n));
          })(t, n, r)
        ) {
          const i = new du(
            t.segments,
            (function (t, e, n, r, s, i) {
              const o = {};
              for (const a of r)
                if (zh(t, n, a) && !s[Bh(a)]) {
                  const n = new du([], {});
                  (n._sourceSegment = t),
                    (n._segmentIndexShift =
                      "legacy" === i ? t.segments.length : e.length),
                    (o[Bh(a)] = n);
                }
              return Object.assign(Object.assign({}, s), o);
            })(t, e, n, r, t.children, s)
          );
          return (
            (i._sourceSegment = t),
            (i._segmentIndexShift = e.length),
            { segmentGroup: i, slicedSegments: n }
          );
        }
        const i = new du(t.segments, t.children);
        return (
          (i._sourceSegment = t),
          (i._segmentIndexShift = e.length),
          { segmentGroup: i, slicedSegments: n }
        );
      }
      function zh(t, e, n) {
        return (
          (!(t.hasChildren() || e.length > 0) || "full" !== n.pathMatch) &&
          "" === n.path &&
          void 0 === n.redirectTo
        );
      }
      function Bh(t) {
        return t.outlet || "primary";
      }
      function Wh(t) {
        return t.data || {};
      }
      function Gh(t) {
        return t.resolve || {};
      }
      function Zh(t) {
        return function (e) {
          return e.pipe(
            fc((e) => {
              const n = t(e);
              return n ? U(n).pipe(E(() => e)) : U([e]);
            })
          );
        };
      }
      class Qh extends class {
        shouldDetach(t) {
          return !1;
        }
        store(t, e) {}
        shouldAttach(t) {
          return !1;
        }
        retrieve(t) {
          return null;
        }
        shouldReuseRoute(t, e) {
          return t.routeConfig === e.routeConfig;
        }
      } {}
      const Jh = new mt("ROUTES");
      class Yh {
        constructor(t, e, n, r) {
          (this.loader = t),
            (this.compiler = e),
            (this.onLoadStartListener = n),
            (this.onLoadEndListener = r);
        }
        load(t, e) {
          return (
            this.onLoadStartListener && this.onLoadStartListener(e),
            this.loadModuleFactory(e.loadChildren).pipe(
              E((n) => {
                this.onLoadEndListener && this.onLoadEndListener(e);
                const r = n.create(t);
                return new ch(ru(r.injector.get(Jh)).map(yh), r);
              })
            )
          );
        }
        loadModuleFactory(t) {
          return "string" == typeof t
            ? U(this.loader.load(t))
            : ou(t()).pipe(
                H((t) =>
                  t instanceof ao
                    ? Vl(t)
                    : U(this.compiler.compileModuleAsync(t))
                )
              );
        }
      }
      class Kh {
        constructor() {
          (this.outlet = null),
            (this.route = null),
            (this.resolver = null),
            (this.children = new Xh()),
            (this.attachRef = null);
        }
      }
      class Xh {
        constructor() {
          this.contexts = new Map();
        }
        onChildOutletCreated(t, e) {
          const n = this.getOrCreateContext(t);
          (n.outlet = e), this.contexts.set(t, n);
        }
        onChildOutletDestroyed(t) {
          const e = this.getContext(t);
          e && (e.outlet = null);
        }
        onOutletDeactivated() {
          const t = this.contexts;
          return (this.contexts = new Map()), t;
        }
        onOutletReAttached(t) {
          this.contexts = t;
        }
        getOrCreateContext(t) {
          let e = this.getContext(t);
          return e || ((e = new Kh()), this.contexts.set(t, e)), e;
        }
        getContext(t) {
          return this.contexts.get(t) || null;
        }
      }
      class td {
        shouldProcessUrl(t) {
          return !0;
        }
        extract(t) {
          return t;
        }
        merge(t, e) {
          return t;
        }
      }
      function ed(t) {
        throw t;
      }
      function nd(t, e, n) {
        return e.parse("/");
      }
      function rd(t, e) {
        return Vl(null);
      }
      let sd = (() => {
          class t {
            constructor(t, e, n, r, s, i, o, a) {
              (this.rootComponentType = t),
                (this.urlSerializer = e),
                (this.rootContexts = n),
                (this.location = r),
                (this.config = a),
                (this.lastSuccessfulNavigation = null),
                (this.currentNavigation = null),
                (this.lastLocationChangeInfo = null),
                (this.navigationId = 0),
                (this.isNgZoneEnabled = !1),
                (this.events = new C()),
                (this.errorHandler = ed),
                (this.malformedUriErrorHandler = nd),
                (this.navigated = !1),
                (this.lastSuccessfulId = -1),
                (this.hooks = {
                  beforePreactivation: rd,
                  afterPreactivation: rd,
                }),
                (this.urlHandlingStrategy = new td()),
                (this.routeReuseStrategy = new Qh()),
                (this.onSameUrlNavigation = "ignore"),
                (this.paramsInheritanceStrategy = "emptyOnly"),
                (this.urlUpdateStrategy = "deferred"),
                (this.relativeLinkResolution = "corrected"),
                (this.ngModule = s.get(oo)),
                (this.console = s.get(Qo));
              const l = s.get(la);
              (this.isNgZoneEnabled = l instanceof la),
                this.resetConfig(a),
                (this.currentUrlTree = new hu(new du([], {}), {}, null)),
                (this.rawUrlTree = this.currentUrlTree),
                (this.browserUrlTree = this.currentUrlTree),
                (this.configLoader = new Yh(
                  i,
                  o,
                  (t) => this.triggerEvent(new zc(t)),
                  (t) => this.triggerEvent(new Bc(t))
                )),
                (this.routerState = Lu(
                  this.currentUrlTree,
                  this.rootComponentType
                )),
                (this.transitions = new $l({
                  id: 0,
                  currentUrlTree: this.currentUrlTree,
                  currentRawUrl: this.currentUrlTree,
                  extractedUrl: this.urlHandlingStrategy.extract(
                    this.currentUrlTree
                  ),
                  urlAfterRedirects: this.urlHandlingStrategy.extract(
                    this.currentUrlTree
                  ),
                  rawUrl: this.currentUrlTree,
                  extras: {},
                  resolve: null,
                  reject: null,
                  promise: Promise.resolve(!0),
                  source: "imperative",
                  restoredState: null,
                  currentSnapshot: this.routerState.snapshot,
                  targetSnapshot: null,
                  currentRouterState: this.routerState,
                  targetRouterState: null,
                  guards: { canActivateChecks: [], canDeactivateChecks: [] },
                  guardsResult: null,
                })),
                (this.navigations = this.setupNavigations(this.transitions)),
                this.processNavigations();
            }
            setupNavigations(t) {
              const e = this.events;
              return t.pipe(
                tc((t) => 0 !== t.id),
                E((t) =>
                  Object.assign(Object.assign({}, t), {
                    extractedUrl: this.urlHandlingStrategy.extract(t.rawUrl),
                  })
                ),
                fc((t) => {
                  let n = !1,
                    r = !1;
                  return Vl(t).pipe(
                    Oc((t) => {
                      this.currentNavigation = {
                        id: t.id,
                        initialUrl: t.currentRawUrl,
                        extractedUrl: t.extractedUrl,
                        trigger: t.source,
                        extras: t.extras,
                        previousNavigation: this.lastSuccessfulNavigation
                          ? Object.assign(
                              Object.assign({}, this.lastSuccessfulNavigation),
                              { previousNavigation: null }
                            )
                          : null,
                      };
                    }),
                    fc((t) => {
                      const n =
                        !this.navigated ||
                        t.extractedUrl.toString() !==
                          this.browserUrlTree.toString();
                      if (
                        ("reload" === this.onSameUrlNavigation || n) &&
                        this.urlHandlingStrategy.shouldProcessUrl(t.rawUrl)
                      )
                        return Vl(t).pipe(
                          fc((t) => {
                            const n = this.transitions.getValue();
                            return (
                              e.next(
                                new Mc(
                                  t.id,
                                  this.serializeUrl(t.extractedUrl),
                                  t.source,
                                  t.restoredState
                                )
                              ),
                              n !== this.transitions.getValue() ? Jl : [t]
                            );
                          }),
                          fc((t) => Promise.resolve(t)),
                          ((r = this.ngModule.injector),
                          (s = this.configLoader),
                          (i = this.urlSerializer),
                          (o = this.config),
                          function (t) {
                            return t.pipe(
                              fc((t) =>
                                (function (t, e, n, r, s) {
                                  return new kh(t, e, n, r, s).apply();
                                })(r, s, i, t.extractedUrl, o).pipe(
                                  E((e) =>
                                    Object.assign(Object.assign({}, t), {
                                      urlAfterRedirects: e,
                                    })
                                  )
                                )
                              )
                            );
                          }),
                          Oc((t) => {
                            this.currentNavigation = Object.assign(
                              Object.assign({}, this.currentNavigation),
                              { finalUrl: t.urlAfterRedirects }
                            );
                          }),
                          (function (t, e, n, r, s) {
                            return function (i) {
                              return i.pipe(
                                H((i) =>
                                  (function (
                                    t,
                                    e,
                                    n,
                                    r,
                                    s = "emptyOnly",
                                    i = "legacy"
                                  ) {
                                    return new Hh(t, e, n, r, s, i).recognize();
                                  })(
                                    t,
                                    e,
                                    i.urlAfterRedirects,
                                    n(i.urlAfterRedirects),
                                    r,
                                    s
                                  ).pipe(
                                    E((t) =>
                                      Object.assign(Object.assign({}, i), {
                                        targetSnapshot: t,
                                      })
                                    )
                                  )
                                )
                              );
                            };
                          })(
                            this.rootComponentType,
                            this.config,
                            (t) => this.serializeUrl(t),
                            this.paramsInheritanceStrategy,
                            this.relativeLinkResolution
                          ),
                          Oc((t) => {
                            "eager" === this.urlUpdateStrategy &&
                              (t.extras.skipLocationChange ||
                                this.setBrowserUrl(
                                  t.urlAfterRedirects,
                                  !!t.extras.replaceUrl,
                                  t.id,
                                  t.extras.state
                                ),
                              (this.browserUrlTree = t.urlAfterRedirects));
                          }),
                          Oc((t) => {
                            const n = new Fc(
                              t.id,
                              this.serializeUrl(t.extractedUrl),
                              this.serializeUrl(t.urlAfterRedirects),
                              t.targetSnapshot
                            );
                            e.next(n);
                          })
                        );
                      var r, s, i, o;
                      if (
                        n &&
                        this.rawUrlTree &&
                        this.urlHandlingStrategy.shouldProcessUrl(
                          this.rawUrlTree
                        )
                      ) {
                        const {
                            id: n,
                            extractedUrl: r,
                            source: s,
                            restoredState: i,
                            extras: o,
                          } = t,
                          a = new Mc(n, this.serializeUrl(r), s, i);
                        e.next(a);
                        const l = Lu(r, this.rootComponentType).snapshot;
                        return Vl(
                          Object.assign(Object.assign({}, t), {
                            targetSnapshot: l,
                            urlAfterRedirects: r,
                            extras: Object.assign(Object.assign({}, o), {
                              skipLocationChange: !1,
                              replaceUrl: !1,
                            }),
                          })
                        );
                      }
                      return (
                        (this.rawUrlTree = t.rawUrl),
                        (this.browserUrlTree = t.urlAfterRedirects),
                        t.resolve(null),
                        Jl
                      );
                    }),
                    Zh((t) => {
                      const {
                        targetSnapshot: e,
                        id: n,
                        extractedUrl: r,
                        rawUrl: s,
                        extras: { skipLocationChange: i, replaceUrl: o },
                      } = t;
                      return this.hooks.beforePreactivation(e, {
                        navigationId: n,
                        appliedUrlTree: r,
                        rawUrlTree: s,
                        skipLocationChange: !!i,
                        replaceUrl: !!o,
                      });
                    }),
                    Oc((t) => {
                      const e = new Hc(
                        t.id,
                        this.serializeUrl(t.extractedUrl),
                        this.serializeUrl(t.urlAfterRedirects),
                        t.targetSnapshot
                      );
                      this.triggerEvent(e);
                    }),
                    E((t) =>
                      Object.assign(Object.assign({}, t), {
                        guards: Rh(
                          t.targetSnapshot,
                          t.currentSnapshot,
                          this.rootContexts
                        ),
                      })
                    ),
                    (function (t, e) {
                      return function (n) {
                        return n.pipe(
                          H((n) => {
                            const {
                              targetSnapshot: r,
                              currentSnapshot: s,
                              guards: {
                                canActivateChecks: i,
                                canDeactivateChecks: o,
                              },
                            } = n;
                            return 0 === o.length && 0 === i.length
                              ? Vl(
                                  Object.assign(Object.assign({}, n), {
                                    guardsResult: !0,
                                  })
                                )
                              : (function (t, e, n, r) {
                                  return U(t).pipe(
                                    H((t) =>
                                      (function (t, e, n, r, s) {
                                        const i =
                                          e && e.routeConfig
                                            ? e.routeConfig.canDeactivate
                                            : null;
                                        return i && 0 !== i.length
                                          ? Vl(
                                              i.map((i) => {
                                                const o = Ph(i, e, s);
                                                let a;
                                                if (
                                                  (function (t) {
                                                    return (
                                                      t && uh(t.canDeactivate)
                                                    );
                                                  })(o)
                                                )
                                                  a = ou(
                                                    o.canDeactivate(t, e, n, r)
                                                  );
                                                else {
                                                  if (!uh(o))
                                                    throw new Error(
                                                      "Invalid CanDeactivate guard"
                                                    );
                                                  a = ou(o(t, e, n, r));
                                                }
                                                return a.pipe(Tc());
                                              })
                                            ).pipe(ph())
                                          : Vl(!0);
                                      })(t.component, t.route, n, e, r)
                                    ),
                                    Tc((t) => !0 !== t, !0)
                                  );
                                })(o, r, s, t).pipe(
                                  H((n) =>
                                    n && "boolean" == typeof n
                                      ? (function (t, e, n, r) {
                                          return U(e).pipe(
                                            Ec((e) =>
                                              U([
                                                Uh(e.route.parent, r),
                                                Mh(e.route, r),
                                                Lh(t, e.path, n),
                                                Dh(t, e.route, n),
                                              ]).pipe(
                                                Xl(),
                                                Tc((t) => !0 !== t, !0)
                                              )
                                            ),
                                            Tc((t) => !0 !== t, !0)
                                          );
                                        })(r, i, t, e)
                                      : Vl(n)
                                  ),
                                  E((t) =>
                                    Object.assign(Object.assign({}, n), {
                                      guardsResult: t,
                                    })
                                  )
                                );
                          })
                        );
                      };
                    })(this.ngModule.injector, (t) => this.triggerEvent(t)),
                    Oc((t) => {
                      if (hh(t.guardsResult)) {
                        const e = Xc(
                          `Redirecting to "${this.serializeUrl(
                            t.guardsResult
                          )}"`
                        );
                        throw ((e.url = t.guardsResult), e);
                      }
                    }),
                    Oc((t) => {
                      const e = new Vc(
                        t.id,
                        this.serializeUrl(t.extractedUrl),
                        this.serializeUrl(t.urlAfterRedirects),
                        t.targetSnapshot,
                        !!t.guardsResult
                      );
                      this.triggerEvent(e);
                    }),
                    tc((t) => {
                      if (!t.guardsResult) {
                        this.resetUrlToCurrentUrlTree();
                        const n = new Dc(
                          t.id,
                          this.serializeUrl(t.extractedUrl),
                          ""
                        );
                        return e.next(n), t.resolve(!1), !1;
                      }
                      return !0;
                    }),
                    Zh((t) => {
                      if (t.guards.canActivateChecks.length)
                        return Vl(t).pipe(
                          Oc((t) => {
                            const e = new $c(
                              t.id,
                              this.serializeUrl(t.extractedUrl),
                              this.serializeUrl(t.urlAfterRedirects),
                              t.targetSnapshot
                            );
                            this.triggerEvent(e);
                          }),
                          fc((t) => {
                            let n = !1;
                            return Vl(t).pipe(
                              ((r = this.paramsInheritanceStrategy),
                              (s = this.ngModule.injector),
                              function (t) {
                                return t.pipe(
                                  H((t) => {
                                    const {
                                      targetSnapshot: e,
                                      guards: { canActivateChecks: n },
                                    } = t;
                                    if (!n.length) return Vl(t);
                                    let i = 0;
                                    return U(n).pipe(
                                      Ec((t) =>
                                        (function (t, e, n, r) {
                                          return (function (t, e, n, r) {
                                            const s = Object.keys(t);
                                            if (0 === s.length) return Vl({});
                                            const i = {};
                                            return U(s).pipe(
                                              H((s) =>
                                                (function (t, e, n, r) {
                                                  const s = Ph(t, e, r);
                                                  return ou(
                                                    s.resolve
                                                      ? s.resolve(e, n)
                                                      : s(e, n)
                                                  );
                                                })(t[s], e, n, r).pipe(
                                                  Oc((t) => {
                                                    i[s] = t;
                                                  })
                                                )
                                              ),
                                              sc(1),
                                              H(() =>
                                                Object.keys(i).length ===
                                                s.length
                                                  ? Vl(i)
                                                  : Jl
                                              )
                                            );
                                          })(t._resolve, t, e, r).pipe(
                                            E(
                                              (e) => (
                                                (t._resolvedData = e),
                                                (t.data = Object.assign(
                                                  Object.assign({}, t.data),
                                                  Hu(t, n).resolve
                                                )),
                                                null
                                              )
                                            )
                                          );
                                        })(t.route, e, r, s)
                                      ),
                                      Oc(() => i++),
                                      sc(1),
                                      H((e) => (i === n.length ? Vl(t) : Jl))
                                    );
                                  })
                                );
                              }),
                              Oc({
                                next: () => (n = !0),
                                complete: () => {
                                  if (!n) {
                                    const n = new Dc(
                                      t.id,
                                      this.serializeUrl(t.extractedUrl),
                                      "At least one route resolver didn't emit any value."
                                    );
                                    e.next(n), t.resolve(!1);
                                  }
                                },
                              })
                            );
                            var r, s;
                          }),
                          Oc((t) => {
                            const e = new qc(
                              t.id,
                              this.serializeUrl(t.extractedUrl),
                              this.serializeUrl(t.urlAfterRedirects),
                              t.targetSnapshot
                            );
                            this.triggerEvent(e);
                          })
                        );
                    }),
                    Zh((t) => {
                      const {
                        targetSnapshot: e,
                        id: n,
                        extractedUrl: r,
                        rawUrl: s,
                        extras: { skipLocationChange: i, replaceUrl: o },
                      } = t;
                      return this.hooks.afterPreactivation(e, {
                        navigationId: n,
                        appliedUrlTree: r,
                        rawUrlTree: s,
                        skipLocationChange: !!i,
                        replaceUrl: !!o,
                      });
                    }),
                    E((t) => {
                      const e = (function (t, e, n) {
                        const r = Gu(t, e._root, n ? n._root : void 0);
                        return new Du(r, e);
                      })(
                        this.routeReuseStrategy,
                        t.targetSnapshot,
                        t.currentRouterState
                      );
                      return Object.assign(Object.assign({}, t), {
                        targetRouterState: e,
                      });
                    }),
                    Oc((t) => {
                      (this.currentUrlTree = t.urlAfterRedirects),
                        (this.rawUrlTree = this.urlHandlingStrategy.merge(
                          this.currentUrlTree,
                          t.rawUrl
                        )),
                        (this.routerState = t.targetRouterState),
                        "deferred" === this.urlUpdateStrategy &&
                          (t.extras.skipLocationChange ||
                            this.setBrowserUrl(
                              this.rawUrlTree,
                              !!t.extras.replaceUrl,
                              t.id,
                              t.extras.state
                            ),
                          (this.browserUrlTree = t.urlAfterRedirects));
                    }),
                    ((i = this.rootContexts),
                    (o = this.routeReuseStrategy),
                    (a = (t) => this.triggerEvent(t)),
                    E(
                      (t) => (
                        new ah(
                          o,
                          t.targetRouterState,
                          t.currentRouterState,
                          a
                        ).activate(i),
                        t
                      )
                    )),
                    Oc({
                      next() {
                        n = !0;
                      },
                      complete() {
                        n = !0;
                      },
                    }),
                    ((s = () => {
                      if (!n && !r) {
                        this.resetUrlToCurrentUrlTree();
                        const n = new Dc(
                          t.id,
                          this.serializeUrl(t.extractedUrl),
                          `Navigation ID ${t.id} is not equal to the current navigation id ${this.navigationId}`
                        );
                        e.next(n), t.resolve(!1);
                      }
                      this.currentNavigation = null;
                    }),
                    (t) => t.lift(new Pc(s))),
                    Cc((n) => {
                      if (((r = !0), (s = n) && s.ngNavigationCancelingError)) {
                        const r = hh(n.url);
                        r ||
                          ((this.navigated = !0),
                          this.resetStateAndUrl(
                            t.currentRouterState,
                            t.currentUrlTree,
                            t.rawUrl
                          ));
                        const s = new Dc(
                          t.id,
                          this.serializeUrl(t.extractedUrl),
                          n.message
                        );
                        e.next(s),
                          r
                            ? setTimeout(() => {
                                const e = this.urlHandlingStrategy.merge(
                                  n.url,
                                  this.rawUrlTree
                                );
                                return this.scheduleNavigation(
                                  e,
                                  "imperative",
                                  null,
                                  {
                                    skipLocationChange:
                                      t.extras.skipLocationChange,
                                    replaceUrl:
                                      "eager" === this.urlUpdateStrategy,
                                  },
                                  {
                                    resolve: t.resolve,
                                    reject: t.reject,
                                    promise: t.promise,
                                  }
                                );
                              }, 0)
                            : t.resolve(!1);
                      } else {
                        this.resetStateAndUrl(
                          t.currentRouterState,
                          t.currentUrlTree,
                          t.rawUrl
                        );
                        const r = new Lc(
                          t.id,
                          this.serializeUrl(t.extractedUrl),
                          n
                        );
                        e.next(r);
                        try {
                          t.resolve(this.errorHandler(n));
                        } catch (i) {
                          t.reject(i);
                        }
                      }
                      var s;
                      return Jl;
                    })
                  );
                  var s, i, o, a;
                })
              );
            }
            resetRootComponentType(t) {
              (this.rootComponentType = t),
                (this.routerState.root.component = this.rootComponentType);
            }
            getTransition() {
              const t = this.transitions.value;
              return (t.urlAfterRedirects = this.browserUrlTree), t;
            }
            setTransition(t) {
              this.transitions.next(
                Object.assign(Object.assign({}, this.getTransition()), t)
              );
            }
            initialNavigation() {
              this.setUpLocationChangeListener(),
                0 === this.navigationId &&
                  this.navigateByUrl(this.location.path(!0), {
                    replaceUrl: !0,
                  });
            }
            setUpLocationChangeListener() {
              this.locationSubscription ||
                (this.locationSubscription = this.location.subscribe((t) => {
                  const e = this.extractLocationChangeInfoFromEvent(t);
                  this.shouldScheduleNavigation(
                    this.lastLocationChangeInfo,
                    e
                  ) &&
                    setTimeout(() => {
                      const { source: t, state: n, urlTree: r } = e,
                        s = { replaceUrl: !0 };
                      if (n) {
                        const t = Object.assign({}, n);
                        delete t.navigationId,
                          0 !== Object.keys(t).length && (s.state = t);
                      }
                      this.scheduleNavigation(r, t, n, s);
                    }, 0),
                    (this.lastLocationChangeInfo = e);
                }));
            }
            extractLocationChangeInfoFromEvent(t) {
              var e;
              return {
                source: "popstate" === t.type ? "popstate" : "hashchange",
                urlTree: this.parseUrl(t.url),
                state: (
                  null === (e = t.state) || void 0 === e
                    ? void 0
                    : e.navigationId
                )
                  ? t.state
                  : null,
                transitionId: this.getTransition().id,
              };
            }
            shouldScheduleNavigation(t, e) {
              if (!t) return !0;
              const n = e.urlTree.toString() === t.urlTree.toString();
              return !(
                e.transitionId === t.transitionId &&
                n &&
                (("hashchange" === e.source && "popstate" === t.source) ||
                  ("popstate" === e.source && "hashchange" === t.source))
              );
            }
            get url() {
              return this.serializeUrl(this.currentUrlTree);
            }
            getCurrentNavigation() {
              return this.currentNavigation;
            }
            triggerEvent(t) {
              this.events.next(t);
            }
            resetConfig(t) {
              gh(t),
                (this.config = t.map(yh)),
                (this.navigated = !1),
                (this.lastSuccessfulId = -1);
            }
            ngOnDestroy() {
              this.dispose();
            }
            dispose() {
              this.locationSubscription &&
                (this.locationSubscription.unsubscribe(),
                (this.locationSubscription = void 0));
            }
            createUrlTree(t, e = {}) {
              const {
                  relativeTo: n,
                  queryParams: r,
                  fragment: s,
                  queryParamsHandling: i,
                  preserveFragment: o,
                } = e,
                a = n || this.routerState.root,
                l = o ? this.currentUrlTree.fragment : s;
              let c = null;
              switch (i) {
                case "merge":
                  c = Object.assign(
                    Object.assign({}, this.currentUrlTree.queryParams),
                    r
                  );
                  break;
                case "preserve":
                  c = this.currentUrlTree.queryParams;
                  break;
                default:
                  c = r || null;
              }
              return (
                null !== c && (c = this.removeEmptyProps(c)),
                (function (t, e, n, r, s) {
                  if (0 === n.length) return Yu(e.root, e.root, e, r, s);
                  const i = (function (t) {
                    if (
                      "string" == typeof t[0] &&
                      1 === t.length &&
                      "/" === t[0]
                    )
                      return new Xu(!0, 0, t);
                    let e = 0,
                      n = !1;
                    const r = t.reduce((t, r, s) => {
                      if ("object" == typeof r && null != r) {
                        if (r.outlets) {
                          const e = {};
                          return (
                            iu(r.outlets, (t, n) => {
                              e[n] = "string" == typeof t ? t.split("/") : t;
                            }),
                            [...t, { outlets: e }]
                          );
                        }
                        if (r.segmentPath) return [...t, r.segmentPath];
                      }
                      return "string" != typeof r
                        ? [...t, r]
                        : 0 === s
                        ? (r.split("/").forEach((r, s) => {
                            (0 == s && "." === r) ||
                              (0 == s && "" === r
                                ? (n = !0)
                                : ".." === r
                                ? e++
                                : "" != r && t.push(r));
                          }),
                          t)
                        : [...t, r];
                    }, []);
                    return new Xu(n, e, r);
                  })(n);
                  if (i.toRoot()) return Yu(e.root, new du([], {}), e, r, s);
                  const o = (function (t, e, n) {
                      if (t.isAbsolute) return new th(e.root, !0, 0);
                      if (-1 === n.snapshot._lastPathIndex) {
                        const t = n.snapshot._urlSegment;
                        return new th(t, t === e.root, 0);
                      }
                      const r = Qu(t.commands[0]) ? 0 : 1;
                      return (function (t, e, n) {
                        let r = t,
                          s = e,
                          i = n;
                        for (; i > s; ) {
                          if (((i -= s), (r = r.parent), !r))
                            throw new Error("Invalid number of '../'");
                          s = r.segments.length;
                        }
                        return new th(r, !1, s - i);
                      })(
                        n.snapshot._urlSegment,
                        n.snapshot._lastPathIndex + r,
                        t.numberOfDoubleDots
                      );
                    })(i, e, t),
                    a = o.processChildren
                      ? nh(o.segmentGroup, o.index, i.commands)
                      : eh(o.segmentGroup, o.index, i.commands);
                  return Yu(o.segmentGroup, a, e, r, s);
                })(a, this.currentUrlTree, t, c, l)
              );
            }
            navigateByUrl(t, e = { skipLocationChange: !1 }) {
              const n = hh(t) ? t : this.parseUrl(t),
                r = this.urlHandlingStrategy.merge(n, this.rawUrlTree);
              return this.scheduleNavigation(r, "imperative", null, e);
            }
            navigate(t, e = { skipLocationChange: !1 }) {
              return (
                (function (t) {
                  for (let e = 0; e < t.length; e++) {
                    const n = t[e];
                    if (null == n)
                      throw new Error(
                        `The requested path contains ${n} segment at index ${e}`
                      );
                  }
                })(t),
                this.navigateByUrl(this.createUrlTree(t, e), e)
              );
            }
            serializeUrl(t) {
              return this.urlSerializer.serialize(t);
            }
            parseUrl(t) {
              let e;
              try {
                e = this.urlSerializer.parse(t);
              } catch (n) {
                e = this.malformedUriErrorHandler(n, this.urlSerializer, t);
              }
              return e;
            }
            isActive(t, e) {
              if (hh(t)) return au(this.currentUrlTree, t, e);
              const n = this.parseUrl(t);
              return au(this.currentUrlTree, n, e);
            }
            removeEmptyProps(t) {
              return Object.keys(t).reduce((e, n) => {
                const r = t[n];
                return null != r && (e[n] = r), e;
              }, {});
            }
            processNavigations() {
              this.navigations.subscribe(
                (t) => {
                  (this.navigated = !0),
                    (this.lastSuccessfulId = t.id),
                    this.events.next(
                      new Uc(
                        t.id,
                        this.serializeUrl(t.extractedUrl),
                        this.serializeUrl(this.currentUrlTree)
                      )
                    ),
                    (this.lastSuccessfulNavigation = this.currentNavigation),
                    (this.currentNavigation = null),
                    t.resolve(!0);
                },
                (t) => {
                  this.console.warn("Unhandled Navigation Error: ");
                }
              );
            }
            scheduleNavigation(t, e, n, r, s) {
              const i = this.getTransition(),
                o =
                  "imperative" !== e &&
                  "imperative" === (null == i ? void 0 : i.source),
                a =
                  (this.lastSuccessfulId === i.id || this.currentNavigation
                    ? i.rawUrl
                    : i.urlAfterRedirects
                  ).toString() === t.toString();
              if (o && a) return Promise.resolve(!0);
              let l, c, u;
              s
                ? ((l = s.resolve), (c = s.reject), (u = s.promise))
                : (u = new Promise((t, e) => {
                    (l = t), (c = e);
                  }));
              const h = ++this.navigationId;
              return (
                this.setTransition({
                  id: h,
                  source: e,
                  restoredState: n,
                  currentUrlTree: this.currentUrlTree,
                  currentRawUrl: this.rawUrlTree,
                  rawUrl: t,
                  extras: r,
                  resolve: l,
                  reject: c,
                  promise: u,
                  currentSnapshot: this.routerState.snapshot,
                  currentRouterState: this.routerState,
                }),
                u.catch((t) => Promise.reject(t))
              );
            }
            setBrowserUrl(t, e, n, r) {
              const s = this.urlSerializer.serialize(t);
              (r = r || {}),
                this.location.isCurrentPathEqualTo(s) || e
                  ? this.location.replaceState(
                      s,
                      "",
                      Object.assign(Object.assign({}, r), { navigationId: n })
                    )
                  : this.location.go(
                      s,
                      "",
                      Object.assign(Object.assign({}, r), { navigationId: n })
                    );
            }
            resetStateAndUrl(t, e, n) {
              (this.routerState = t),
                (this.currentUrlTree = e),
                (this.rawUrlTree = this.urlHandlingStrategy.merge(
                  this.currentUrlTree,
                  n
                )),
                this.resetUrlToCurrentUrlTree();
            }
            resetUrlToCurrentUrlTree() {
              this.location.replaceState(
                this.urlSerializer.serialize(this.rawUrlTree),
                "",
                { navigationId: this.lastSuccessfulId }
              );
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(
                ue(Tt),
                ue(mu),
                ue(Xh),
                ue(tl),
                ue(Bs),
                ue(Oa),
                ue(ia),
                ue(void 0)
              );
            }),
            (t.ɵprov = at({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        id = (() => {
          class t {
            constructor(t, e, n, r, s) {
              (this.router = t),
                (this.route = e),
                (this.commands = []),
                (this.onChanges = new C()),
                null == n && r.setAttribute(s.nativeElement, "tabindex", "0");
            }
            ngOnChanges(t) {
              this.onChanges.next(this);
            }
            set routerLink(t) {
              this.commands = null != t ? (Array.isArray(t) ? t : [t]) : [];
            }
            onClick() {
              const t = {
                skipLocationChange: ad(this.skipLocationChange),
                replaceUrl: ad(this.replaceUrl),
                state: this.state,
              };
              return this.router.navigateByUrl(this.urlTree, t), !0;
            }
            get urlTree() {
              return this.router.createUrlTree(this.commands, {
                relativeTo: this.route,
                queryParams: this.queryParams,
                fragment: this.fragment,
                queryParamsHandling: this.queryParamsHandling,
                preserveFragment: ad(this.preserveFragment),
              });
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(
                ti(sd),
                ti(Fu),
                ei("tabindex"),
                ti(Ii),
                ti(Ai)
              );
            }),
            (t.ɵdir = Qt({
              type: t,
              selectors: [["", "routerLink", "", 5, "a", 5, "area"]],
              hostBindings: function (t, e) {
                1 & t &&
                  li("click", function () {
                    return e.onClick();
                  });
              },
              inputs: {
                routerLink: "routerLink",
                queryParams: "queryParams",
                fragment: "fragment",
                queryParamsHandling: "queryParamsHandling",
                preserveFragment: "preserveFragment",
                skipLocationChange: "skipLocationChange",
                replaceUrl: "replaceUrl",
                state: "state",
              },
              features: [mn],
            })),
            t
          );
        })(),
        od = (() => {
          class t {
            constructor(t, e, n) {
              (this.router = t),
                (this.route = e),
                (this.locationStrategy = n),
                (this.commands = []),
                (this.onChanges = new C()),
                (this.subscription = t.events.subscribe((t) => {
                  t instanceof Uc && this.updateTargetUrlAndHref();
                }));
            }
            set routerLink(t) {
              this.commands = null != t ? (Array.isArray(t) ? t : [t]) : [];
            }
            ngOnChanges(t) {
              this.updateTargetUrlAndHref(), this.onChanges.next(this);
            }
            ngOnDestroy() {
              this.subscription.unsubscribe();
            }
            onClick(t, e, n, r, s) {
              if (0 !== t || e || n || r || s) return !0;
              if ("string" == typeof this.target && "_self" != this.target)
                return !0;
              const i = {
                skipLocationChange: ad(this.skipLocationChange),
                replaceUrl: ad(this.replaceUrl),
                state: this.state,
              };
              return this.router.navigateByUrl(this.urlTree, i), !1;
            }
            updateTargetUrlAndHref() {
              this.href = this.locationStrategy.prepareExternalUrl(
                this.router.serializeUrl(this.urlTree)
              );
            }
            get urlTree() {
              return this.router.createUrlTree(this.commands, {
                relativeTo: this.route,
                queryParams: this.queryParams,
                fragment: this.fragment,
                queryParamsHandling: this.queryParamsHandling,
                preserveFragment: ad(this.preserveFragment),
              });
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(ti(sd), ti(Fu), ti(Qa));
            }),
            (t.ɵdir = Qt({
              type: t,
              selectors: [
                ["a", "routerLink", ""],
                ["area", "routerLink", ""],
              ],
              hostVars: 2,
              hostBindings: function (t, e) {
                1 & t &&
                  li("click", function (t) {
                    return e.onClick(
                      t.button,
                      t.ctrlKey,
                      t.shiftKey,
                      t.altKey,
                      t.metaKey
                    );
                  }),
                  2 & t && (fi("href", e.href, hn), Ks("target", e.target));
              },
              inputs: {
                routerLink: "routerLink",
                target: "target",
                queryParams: "queryParams",
                fragment: "fragment",
                queryParamsHandling: "queryParamsHandling",
                preserveFragment: "preserveFragment",
                skipLocationChange: "skipLocationChange",
                replaceUrl: "replaceUrl",
                state: "state",
              },
              features: [mn],
            })),
            t
          );
        })();
      function ad(t) {
        return "" === t || !!t;
      }
      let ld = (() => {
          class t {
            constructor(t, e, n, r, s, i) {
              (this.router = t),
                (this.element = e),
                (this.renderer = n),
                (this.cdr = r),
                (this.link = s),
                (this.linkWithHref = i),
                (this.classes = []),
                (this.isActive = !1),
                (this.routerLinkActiveOptions = { exact: !1 }),
                (this.routerEventsSubscription = t.events.subscribe((t) => {
                  t instanceof Uc && this.update();
                }));
            }
            ngAfterContentInit() {
              U([this.links.changes, this.linksWithHrefs.changes, Vl(null)])
                .pipe(q())
                .subscribe((t) => {
                  this.update(), this.subscribeToEachLinkOnChanges();
                });
            }
            subscribeToEachLinkOnChanges() {
              var t;
              null === (t = this.linkInputChangesSubscription) ||
                void 0 === t ||
                t.unsubscribe();
              const e = [
                ...this.links.toArray(),
                ...this.linksWithHrefs.toArray(),
                this.link,
                this.linkWithHref,
              ]
                .filter((t) => !!t)
                .map((t) => t.onChanges);
              this.linkInputChangesSubscription = U(e)
                .pipe(q())
                .subscribe((t) => {
                  this.isActive !== this.isLinkActive(this.router)(t) &&
                    this.update();
                });
            }
            set routerLinkActive(t) {
              const e = Array.isArray(t) ? t : t.split(" ");
              this.classes = e.filter((t) => !!t);
            }
            ngOnChanges(t) {
              this.update();
            }
            ngOnDestroy() {
              var t;
              this.routerEventsSubscription.unsubscribe(),
                null === (t = this.linkInputChangesSubscription) ||
                  void 0 === t ||
                  t.unsubscribe();
            }
            update() {
              this.links &&
                this.linksWithHrefs &&
                this.router.navigated &&
                Promise.resolve().then(() => {
                  const t = this.hasActiveLinks();
                  this.isActive !== t &&
                    ((this.isActive = t),
                    this.cdr.markForCheck(),
                    this.classes.forEach((e) => {
                      t
                        ? this.renderer.addClass(this.element.nativeElement, e)
                        : this.renderer.removeClass(
                            this.element.nativeElement,
                            e
                          );
                    }));
                });
            }
            isLinkActive(t) {
              return (e) =>
                t.isActive(e.urlTree, this.routerLinkActiveOptions.exact);
            }
            hasActiveLinks() {
              const t = this.isLinkActive(this.router);
              return (
                (this.link && t(this.link)) ||
                (this.linkWithHref && t(this.linkWithHref)) ||
                this.links.some(t) ||
                this.linksWithHrefs.some(t)
              );
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(
                ti(sd),
                ti(Ai),
                ti(Ii),
                ti(Yi),
                ti(id, 8),
                ti(od, 8)
              );
            }),
            (t.ɵdir = Qt({
              type: t,
              selectors: [["", "routerLinkActive", ""]],
              contentQueries: function (t, e, n) {
                if ((1 & t && (Lo(n, id, !0), Lo(n, od, !0)), 2 & t)) {
                  let t;
                  Do((t = Fo())) && (e.links = t),
                    Do((t = Fo())) && (e.linksWithHrefs = t);
                }
              },
              inputs: {
                routerLinkActiveOptions: "routerLinkActiveOptions",
                routerLinkActive: "routerLinkActive",
              },
              exportAs: ["routerLinkActive"],
              features: [mn],
            })),
            t
          );
        })(),
        cd = (() => {
          class t {
            constructor(t, e, n, r, s) {
              (this.parentContexts = t),
                (this.location = e),
                (this.resolver = n),
                (this.changeDetector = s),
                (this.activated = null),
                (this._activatedRoute = null),
                (this.activateEvents = new ko()),
                (this.deactivateEvents = new ko()),
                (this.name = r || "primary"),
                t.onChildOutletCreated(this.name, this);
            }
            ngOnDestroy() {
              this.parentContexts.onChildOutletDestroyed(this.name);
            }
            ngOnInit() {
              if (!this.activated) {
                const t = this.parentContexts.getContext(this.name);
                t &&
                  t.route &&
                  (t.attachRef
                    ? this.attach(t.attachRef, t.route)
                    : this.activateWith(t.route, t.resolver || null));
              }
            }
            get isActivated() {
              return !!this.activated;
            }
            get component() {
              if (!this.activated) throw new Error("Outlet is not activated");
              return this.activated.instance;
            }
            get activatedRoute() {
              if (!this.activated) throw new Error("Outlet is not activated");
              return this._activatedRoute;
            }
            get activatedRouteData() {
              return this._activatedRoute
                ? this._activatedRoute.snapshot.data
                : {};
            }
            detach() {
              if (!this.activated) throw new Error("Outlet is not activated");
              this.location.detach();
              const t = this.activated;
              return (this.activated = null), (this._activatedRoute = null), t;
            }
            attach(t, e) {
              (this.activated = t),
                (this._activatedRoute = e),
                this.location.insert(t.hostView);
            }
            deactivate() {
              if (this.activated) {
                const t = this.component;
                this.activated.destroy(),
                  (this.activated = null),
                  (this._activatedRoute = null),
                  this.deactivateEvents.emit(t);
              }
            }
            activateWith(t, e) {
              if (this.isActivated)
                throw new Error("Cannot activate an already activated outlet");
              this._activatedRoute = t;
              const n = (e = e || this.resolver).resolveComponentFactory(
                  t._futureSnapshot.routeConfig.component
                ),
                r = this.parentContexts.getOrCreateContext(this.name).children,
                s = new ud(t, r, this.location.injector);
              (this.activated = this.location.createComponent(
                n,
                this.location.length,
                s
              )),
                this.changeDetector.markForCheck(),
                this.activateEvents.emit(this.activated.instance);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(ti(Xh), ti(co), ti(Si), ei("name"), ti(Yi));
            }),
            (t.ɵdir = Qt({
              type: t,
              selectors: [["router-outlet"]],
              outputs: {
                activateEvents: "activate",
                deactivateEvents: "deactivate",
              },
              exportAs: ["outlet"],
            })),
            t
          );
        })();
      class ud {
        constructor(t, e, n) {
          (this.route = t), (this.childContexts = e), (this.parent = n);
        }
        get(t, e) {
          return t === Fu
            ? this.route
            : t === Xh
            ? this.childContexts
            : this.parent.get(t, e);
        }
      }
      class hd {}
      class dd {
        preload(t, e) {
          return Vl(null);
        }
      }
      let pd = (() => {
          class t {
            constructor(t, e, n, r, s) {
              (this.router = t),
                (this.injector = r),
                (this.preloadingStrategy = s),
                (this.loader = new Yh(
                  e,
                  n,
                  (e) => t.triggerEvent(new zc(e)),
                  (e) => t.triggerEvent(new Bc(e))
                ));
            }
            setUpPreloading() {
              this.subscription = this.router.events
                .pipe(
                  tc((t) => t instanceof Uc),
                  Ec(() => this.preload())
                )
                .subscribe(() => {});
            }
            preload() {
              const t = this.injector.get(oo);
              return this.processRoutes(t, this.router.config);
            }
            ngOnDestroy() {
              this.subscription && this.subscription.unsubscribe();
            }
            processRoutes(t, e) {
              const n = [];
              for (const r of e)
                if (r.loadChildren && !r.canLoad && r._loadedConfig) {
                  const t = r._loadedConfig;
                  n.push(this.processRoutes(t.module, t.routes));
                } else
                  r.loadChildren && !r.canLoad
                    ? n.push(this.preloadConfig(t, r))
                    : r.children && n.push(this.processRoutes(t, r.children));
              return U(n).pipe(
                q(),
                E((t) => {})
              );
            }
            preloadConfig(t, e) {
              return this.preloadingStrategy.preload(e, () =>
                this.loader
                  .load(t.injector, e)
                  .pipe(
                    H(
                      (t) => (
                        (e._loadedConfig = t),
                        this.processRoutes(t.module, t.routes)
                      )
                    )
                  )
              );
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(ue(sd), ue(Oa), ue(ia), ue(Bs), ue(hd));
            }),
            (t.ɵprov = at({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        fd = (() => {
          class t {
            constructor(t, e, n = {}) {
              (this.router = t),
                (this.viewportScroller = e),
                (this.options = n),
                (this.lastId = 0),
                (this.lastSource = "imperative"),
                (this.restoredId = 0),
                (this.store = {}),
                (n.scrollPositionRestoration =
                  n.scrollPositionRestoration || "disabled"),
                (n.anchorScrolling = n.anchorScrolling || "disabled");
            }
            init() {
              "disabled" !== this.options.scrollPositionRestoration &&
                this.viewportScroller.setHistoryScrollRestoration("manual"),
                (this.routerEventsSubscription = this.createScrollEvents()),
                (this.scrollEventsSubscription = this.consumeScrollEvents());
            }
            createScrollEvents() {
              return this.router.events.subscribe((t) => {
                t instanceof Mc
                  ? ((this.store[
                      this.lastId
                    ] = this.viewportScroller.getScrollPosition()),
                    (this.lastSource = t.navigationTrigger),
                    (this.restoredId = t.restoredState
                      ? t.restoredState.navigationId
                      : 0))
                  : t instanceof Uc &&
                    ((this.lastId = t.id),
                    this.scheduleScrollEvent(
                      t,
                      this.router.parseUrl(t.urlAfterRedirects).fragment
                    ));
              });
            }
            consumeScrollEvents() {
              return this.router.events.subscribe((t) => {
                t instanceof Jc &&
                  (t.position
                    ? "top" === this.options.scrollPositionRestoration
                      ? this.viewportScroller.scrollToPosition([0, 0])
                      : "enabled" === this.options.scrollPositionRestoration &&
                        this.viewportScroller.scrollToPosition(t.position)
                    : t.anchor && "enabled" === this.options.anchorScrolling
                    ? this.viewportScroller.scrollToAnchor(t.anchor)
                    : "disabled" !== this.options.scrollPositionRestoration &&
                      this.viewportScroller.scrollToPosition([0, 0]));
              });
            }
            scheduleScrollEvent(t, e) {
              this.router.triggerEvent(
                new Jc(
                  t,
                  "popstate" === this.lastSource
                    ? this.store[this.restoredId]
                    : null,
                  e
                )
              );
            }
            ngOnDestroy() {
              this.routerEventsSubscription &&
                this.routerEventsSubscription.unsubscribe(),
                this.scrollEventsSubscription &&
                  this.scrollEventsSubscription.unsubscribe();
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(ue(sd), ue(ul), ue(void 0));
            }),
            (t.ɵprov = at({ token: t, factory: t.ɵfac })),
            t
          );
        })();
      const gd = new mt("ROUTER_CONFIGURATION"),
        md = new mt("ROUTER_FORROOT_GUARD"),
        vd = [
          tl,
          { provide: mu, useClass: vu },
          {
            provide: sd,
            useFactory: function (t, e, n, r, s, i, o, a = {}, l, c) {
              const u = new sd(null, t, e, n, r, s, i, ru(o));
              if (
                (l && (u.urlHandlingStrategy = l),
                c && (u.routeReuseStrategy = c),
                (function (t, e) {
                  t.errorHandler && (e.errorHandler = t.errorHandler),
                    t.malformedUriErrorHandler &&
                      (e.malformedUriErrorHandler = t.malformedUriErrorHandler),
                    t.onSameUrlNavigation &&
                      (e.onSameUrlNavigation = t.onSameUrlNavigation),
                    t.paramsInheritanceStrategy &&
                      (e.paramsInheritanceStrategy =
                        t.paramsInheritanceStrategy),
                    t.relativeLinkResolution &&
                      (e.relativeLinkResolution = t.relativeLinkResolution),
                    t.urlUpdateStrategy &&
                      (e.urlUpdateStrategy = t.urlUpdateStrategy);
                })(a, u),
                a.enableTracing)
              ) {
                const t = La();
                u.events.subscribe((e) => {
                  t.logGroup("Router Event: " + e.constructor.name),
                    t.log(e.toString()),
                    t.log(e),
                    t.logGroupEnd();
                });
              }
              return u;
            },
            deps: [
              mu,
              Xh,
              tl,
              Bs,
              Oa,
              ia,
              Jh,
              gd,
              [class {}, new et()],
              [class {}, new et()],
            ],
          },
          Xh,
          {
            provide: Fu,
            useFactory: function (t) {
              return t.routerState.root;
            },
            deps: [sd],
          },
          { provide: Oa, useClass: Pa },
          pd,
          dd,
          class {
            preload(t, e) {
              return e().pipe(Cc(() => Vl(null)));
            }
          },
          { provide: gd, useValue: { enableTracing: !1 } },
        ];
      function yd() {
        return new xa("Router", sd);
      }
      let _d = (() => {
        class t {
          constructor(t, e) {}
          static forRoot(e, n) {
            return {
              ngModule: t,
              providers: [
                vd,
                Cd(e),
                {
                  provide: md,
                  useFactory: xd,
                  deps: [[sd, new et(), new rt()]],
                },
                { provide: gd, useValue: n || {} },
                {
                  provide: Qa,
                  useFactory: wd,
                  deps: [Ha, [new tt(Ya), new et()], gd],
                },
                { provide: fd, useFactory: bd, deps: [sd, ul, gd] },
                {
                  provide: hd,
                  useExisting:
                    n && n.preloadingStrategy ? n.preloadingStrategy : dd,
                },
                { provide: xa, multi: !0, useFactory: yd },
                [
                  Sd,
                  { provide: Vo, multi: !0, useFactory: kd, deps: [Sd] },
                  { provide: Td, useFactory: Ed, deps: [Sd] },
                  { provide: Zo, multi: !0, useExisting: Td },
                ],
              ],
            };
          }
          static forChild(e) {
            return { ngModule: t, providers: [Cd(e)] };
          }
        }
        return (
          (t.ɵmod = Gt({ type: t })),
          (t.ɵinj = lt({
            factory: function (e) {
              return new (e || t)(ue(md, 8), ue(sd, 8));
            },
          })),
          t
        );
      })();
      function bd(t, e, n) {
        return n.scrollOffset && e.setOffset(n.scrollOffset), new fd(t, e, n);
      }
      function wd(t, e, n = {}) {
        return n.useHash ? new Xa(t, e) : new Ka(t, e);
      }
      function xd(t) {
        return "guarded";
      }
      function Cd(t) {
        return [
          { provide: vt, multi: !0, useValue: t },
          { provide: Jh, multi: !0, useValue: t },
        ];
      }
      let Sd = (() => {
        class t {
          constructor(t) {
            (this.injector = t),
              (this.initNavigation = !1),
              (this.resultOfPreactivationDone = new C());
          }
          appInitializer() {
            return this.injector.get($a, Promise.resolve(null)).then(() => {
              let t = null;
              const e = new Promise((e) => (t = e)),
                n = this.injector.get(sd),
                r = this.injector.get(gd);
              return (
                "disabled" === r.initialNavigation
                  ? (n.setUpLocationChangeListener(), t(!0))
                  : "enabled" === r.initialNavigation ||
                    "enabledBlocking" === r.initialNavigation
                  ? ((n.hooks.afterPreactivation = () =>
                      this.initNavigation
                        ? Vl(null)
                        : ((this.initNavigation = !0),
                          t(!0),
                          this.resultOfPreactivationDone)),
                    n.initialNavigation())
                  : t(!0),
                e
              );
            });
          }
          bootstrapListener(t) {
            const e = this.injector.get(gd),
              n = this.injector.get(pd),
              r = this.injector.get(fd),
              s = this.injector.get(sd),
              i = this.injector.get(Ta);
            t === i.components[0] &&
              (("enabledNonBlocking" !== e.initialNavigation &&
                void 0 !== e.initialNavigation) ||
                s.initialNavigation(),
              n.setUpPreloading(),
              r.init(),
              s.resetRootComponentType(i.componentTypes[0]),
              this.resultOfPreactivationDone.next(null),
              this.resultOfPreactivationDone.complete());
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(ue(Bs));
          }),
          (t.ɵprov = at({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      function kd(t) {
        return t.appInitializer.bind(t);
      }
      function Ed(t) {
        return t.bootstrapListener.bind(t);
      }
      const Td = new mt("Router Initializer");
      function Ad(t, e) {
        if (1 & t) {
          const t = je();
          si(0, "div"),
            si(1, "div", 4),
            si(2, "label"),
            si(3, "input", 5),
            li("click", function () {
              Re.lFrame.contextLView = t;
              const n = e.$implicit;
              return (function (t = 1) {
                return (function (t) {
                  return (Re.lFrame.contextLView = (function (t, e) {
                    for (; t > 0; ) (e = e[15]), t--;
                    return e;
                  })(t, Re.lFrame.contextLView))[8];
                })(t);
              })().add_selected(n);
            }),
            ii(),
            hi(4),
            ii(),
            ii(),
            ii();
        }
        if (2 & t) {
          const t = e.$implicit;
          qr(4), pi(" ", t, " ");
        }
      }
      let Od = (() => {
        class t {
          constructor() {
            this.selected_event = new ko();
          }
          ngOnInit() {
            this.item_list = this.items.split(",");
          }
          add_selected(t) {
            switch (t) {
              case "C#":
                this.selected_event.emit("cs");
                break;
              case "Project Management":
                this.selected_event.emit("pm");
                break;
              case "HTML/CSS":
                this.selected_event.emit("htmlcss");
                break;
              case "JavaScript":
                this.selected_event.emit("js");
                break;
              default:
                this.selected_event.emit(t.toLowerCase());
            }
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵcmp = qt({
            type: t,
            selectors: [["app-filters"]],
            inputs: { title: "title", items: "items" },
            outputs: { selected_event: "selected_event" },
            decls: 5,
            vars: 2,
            consts: [
              [1, "dropdown", "mx-3"],
              [
                "type",
                "button",
                "id",
                "dropdownMenuButton",
                "data-toggle",
                "dropdown",
                "aria-haspopup",
                "true",
                "aria-expanded",
                "false",
                1,
                "btn",
                "border",
                "text-white",
                "dropdown-toggle",
              ],
              ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu"],
              [4, "ngFor", "ngForOf"],
              [1, "checkbox", "dropdown-item", "my-3"],
              ["type", "checkbox", 3, "click"],
            ],
            template: function (t, e) {
              1 & t &&
                (si(0, "div", 0),
                si(1, "button", 1),
                hi(2),
                ii(),
                si(3, "div", 2),
                Xs(4, Ad, 5, 1, "div", 3),
                ii(),
                ii()),
                2 & t &&
                  (qr(2),
                  pi(" ", e.title, " "),
                  qr(2),
                  ni("ngForOf", e.item_list));
            },
            directives: [al],
            styles: [""],
          })),
          t
        );
      })();
      function Id(t, e) {
        if (
          (1 & t && (si(0, "div"), si(1, "span", 8), hi(2), ii(), ii()), 2 & t)
        ) {
          const t = e.$implicit;
          qr(2), di(t);
        }
      }
      let Rd = (() => {
        class t {
          constructor() {}
          ngOnInit() {
            this.skill_list = this.skills.split(",");
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵcmp = qt({
            type: t,
            selectors: [["app-project-preview"]],
            inputs: {
              skills: "skills",
              image_thumbnail: "image_thumbnail",
              title: "title",
            },
            decls: 9,
            vars: 3,
            consts: [
              [1, "col-4", "animate_animated", "animate__fadeIn"],
              [1, "card", "mr-2", "mt-3", 2, "width", "18rem"],
              ["href", "#!"],
              ["alt", "Card image cap", 1, "card-img-top", 3, "src"],
              [1, "card-body", "mb-3", "p-0"],
              [1, "d-flex"],
              [4, "ngFor", "ngForOf"],
              [1, "card-text"],
              [1, "badge", "badge-pill", "mx-auto"],
            ],
            template: function (t, e) {
              1 & t &&
                (si(0, "div", 0),
                si(1, "div", 1),
                si(2, "a", 2),
                oi(3, "img", 3),
                ii(),
                si(4, "div", 4),
                si(5, "div", 5),
                Xs(6, Id, 3, 1, "div", 6),
                ii(),
                si(7, "p", 7),
                hi(8),
                ii(),
                ii(),
                ii(),
                ii()),
                2 & t &&
                  (qr(3),
                  ni("src", e.image_thumbnail, hn),
                  qr(3),
                  ni("ngForOf", e.skill_list),
                  qr(2),
                  di(e.title));
            },
            directives: [al],
            styles: [
              ".card[_ngcontent-%COMP%]{background-color:#0b2228}.badge[_ngcontent-%COMP%]{background-color:#fd7e14}.badge-pill[_ngcontent-%COMP%]:hover, .badge[_ngcontent-%COMP%]:hover{background-color:transparent;color:#fff;font-weight:400}",
            ],
          })),
          t
        );
      })();
      const Pd = [
        {
          path: "Portfolio",
          component: (() => {
            class t {
              constructor() {
                (this.skill_tags = [
                  ["cs", "C#"],
                  ["cpp", "C++"],
                  ["python", "PYTHON"],
                  ["java", "JAVA"],
                  ["unity", "UNITY"],
                  ["unreal", "UNREAL"],
                  ["design", "DESIGN"],
                  ["backend", "BACKEND"],
                  ["mobile", "MOBILE"],
                  ["vr", "VIRTUAL REALITY"],
                  ["clear", "CLEAR ALL"],
                ]),
                  (this.chosen_skill = []);
              }
              ngOnInit() {}
              get_selected(t) {
                (this.selected_skill = t),
                  this.chosen_skill.includes(this.selected_skill)
                    ? this.chosen_skill.splice(
                        this.chosen_skill.indexOf(this.selected_skill),
                        1
                      )
                    : this.chosen_skill.push(this.selected_skill),
                  console.log(this.chosen_skill),
                  this.filter_skill();
              }
              filter_skill() {
                let t = this.chosen_skill.length;
                for (let e = 0; e < this.skill_tags.length; e++)
                  0 === t
                    ? this.toggle_class(this.skill_tags[e][0], !1)
                    : t >= 1 && this.toggle_class(this.skill_tags[e][0], !0);
                1 === t
                  ? this.toggle_class(this.chosen_skill[0], !1)
                  : t > 1 &&
                    document
                      .querySelectorAll("." + this.chosen_skill[0])
                      .forEach((t) => {
                        this.chosen_skill.every((e) =>
                          t.classList.contains(e)
                        ) && t.classList.remove("hidden");
                      });
              }
              toggle_class(t, e) {
                document.querySelectorAll("." + t).forEach((n) => {
                  n.classList.toggle("hidden", e),
                    console.log(t + ": " + n.classList);
                });
              }
            }
            return (
              (t.ɵfac = function (e) {
                return new (e || t)();
              }),
              (t.ɵcmp = qt({
                type: t,
                selectors: [["app-portfolio"]],
                decls: 78,
                vars: 0,
                consts: [
                  [
                    "id",
                    "mainNav",
                    1,
                    "navbar",
                    "navbar-expand-lg",
                    "text-uppercase",
                    "fixed-top",
                  ],
                  [1, "container"],
                  ["href", "#page-top", 1, "js-scroll-trigger"],
                  [
                    "type",
                    "button",
                    "data-toggle",
                    "collapse",
                    "data-target",
                    "#navbarResponsive",
                    "aria-controls",
                    "navbarResponsive",
                    "aria-expanded",
                    "false",
                    "aria-label",
                    "Toggle navigation",
                    1,
                    "navbar-toggler",
                    "navbar-toggler-right",
                    "text-uppercase",
                    "text-white",
                    "rounded",
                  ],
                  [1, "fas", "fa-bars"],
                  ["id", "navbarResponsive", 1, "collapse", "navbar-collapse"],
                  [1, "navbar-nav", "ml-auto"],
                  [1, "nav-item", "mx-0", "mx-lg-1"],
                  [
                    "routerLink",
                    "/About",
                    "routerLinkActive",
                    "active",
                    1,
                    "nav-link",
                    "my-3",
                    "my-lg-0",
                    "px-0",
                    "px-lg-3",
                    "rounded",
                    "js-scroll-trigger",
                  ],
                  [
                    "routerLink",
                    "/Portfolio",
                    "routerLinkActive",
                    "active",
                    1,
                    "nav-link",
                    "my-3",
                    "my-lg-0",
                    "px-0",
                    "px-lg-3",
                    "rounded",
                    "js-scroll-trigger",
                  ],
                  [
                    "target",
                    "_blank",
                    "href",
                    "https://drive.google.com/file/d/1H18dQx-U2BO1mgFXNuwFs9mMy0ebcHDu/view?usp=sharing",
                    1,
                    "nav-link",
                    "my-3",
                    "my-lg-0",
                    "px-0",
                    "px-lg-3",
                    "rounded",
                    "js-scroll-trigger",
                  ],
                  [
                    1,
                    "page-section",
                    "flex-wrapper",
                    "text-white",
                    "mt-5",
                    "mb-0",
                  ],
                  [1, "text-center", "text-uppercase", "mb-0"],
                  [1, "divider-custom"],
                  [1, "divider-custom-line"],
                  [1, "d-flex", "align-items-center", "justify-content-center"],
                  [
                    "title",
                    "Languages",
                    "items",
                    "Python,Java,C#,JavaScript,HTML/CSS",
                    3,
                    "selected_event",
                  ],
                  [
                    "title",
                    "Frameworks",
                    "items",
                    "Angular,Bootstrap,Jasmine,Flask",
                    3,
                    "selected_event",
                  ],
                  [
                    "title",
                    "Software",
                    "items",
                    "Unity,Blender",
                    3,
                    "selected_event",
                  ],
                  [
                    1,
                    "row",
                    "d-flex",
                    "align-items-center",
                    "justify-content-center",
                  ],
                  [
                    "title",
                    "Crystal Crysis",
                    "skills",
                    "C#,Unity,3D Design",
                    "image_thumbnail",
                    "/assets/img/portfolio/obviouspalace/start_screen.png",
                    1,
                    "cs",
                    "unity",
                    "design",
                  ],
                  [
                    "title",
                    "Escaping the Negativity",
                    "skills",
                    "Unity,Art,Design,Project Management",
                    "image_thumbnail",
                    "/assets/img/portfolio/athenahacks/escaping_the_negativity_preview.png",
                    1,
                    "unity",
                    "design",
                    "pm",
                  ],
                  [
                    "title",
                    "Mimi AI: Happy For You",
                    "skills",
                    "Python,Flask,JavaScript,HTML/CSS,Bootstrap",
                    "image_thumbnail",
                    "/assets/img/portfolio/mimi/prototype.png",
                    1,
                    "python",
                    "flask",
                    "js",
                    "htmlcss",
                    "bootstrap",
                  ],
                  [
                    "title",
                    "Personal Website",
                    "skills",
                    "HTML/CSS,Bootstrap,Angular,Design",
                    "image_thumbnail",
                    "/assets/fish3.png",
                    1,
                    "htmlcss",
                    "bootstrap",
                    "angular",
                    "design",
                  ],
                  [
                    "title",
                    "Digital Root",
                    "skills",
                    "HTML/CSS,JavaScript",
                    "image_thumbnail",
                    "/assets/img/portfolio/digitalroot.png",
                    1,
                    "htmlcss",
                    "js",
                    "design",
                  ],
                  [1, "footer", "text-center"],
                  [1, "row"],
                  [1, "col", "mb-5", "mb-lg-0"],
                  [1, "mb-4"],
                  [
                    "href",
                    "https://github.com/airada",
                    1,
                    "btn",
                    "btn-outline-light",
                    "btn-social",
                    "mx-1",
                  ],
                  [1, "fab", "fa-fw", "fa-github", 2, "color", "#FFFFFF"],
                  [
                    "href",
                    "https://rninchan.itch.io/",
                    1,
                    "btn",
                    "btn-outline-light",
                    "btn-social",
                    "mx-1",
                  ],
                  [1, "fab", "fa-fw", "fa-itch-io", 2, "color", "#FFFFFF"],
                  [
                    "href",
                    "https://www.linkedin.com/in/jasmineirada/",
                    1,
                    "btn",
                    "btn-outline-light",
                    "btn-social",
                    "mx-1",
                  ],
                  [1, "fab", "fa-fw", "fa-linkedin", 2, "color", "#FFFFFF"],
                  [
                    "href",
                    "mailto:jasmineirada@gmail.com",
                    1,
                    "btn",
                    "btn-outline-light",
                    "btn-social",
                    "mx-1",
                  ],
                  [1, "fas", "fa-fw", "fa-envelope", 2, "color", "#FFFFFF"],
                  [1, "copyright", "py-4", "text-center", "text-white"],
                  [1, "scroll-to-top", "d-lg-none", "position-fixed"],
                  [
                    "href",
                    "#page-top",
                    1,
                    "js-scroll-trigger",
                    "d-block",
                    "text-center",
                    "text-white",
                    "rounded",
                  ],
                  [1, "fa", "fa-chevron-up"],
                  [
                    "id",
                    "portfolioModal1",
                    "tabindex",
                    "-1",
                    "role",
                    "dialog",
                    "aria-labelledby",
                    "portfolioModal1Label",
                    "aria-hidden",
                    "true",
                    1,
                    "portfolio-modal",
                    "modal",
                    "fade",
                  ],
                  ["role", "document", 1, "modal-dialog", "modal-xl"],
                  [1, "modal-content"],
                  [
                    "type",
                    "button",
                    "data-dismiss",
                    "modal",
                    "aria-label",
                    "Close",
                    1,
                    "close",
                  ],
                  ["aria-hidden", "true"],
                  [1, "fas", "fa-times"],
                  [1, "modal-body", "text-center"],
                  [1, "row", "justify-content-center"],
                  [1, "col-lg-8"],
                  [
                    "id",
                    "portfolioModal1Label",
                    1,
                    "portfolio-modal-title",
                    "text-secondary",
                    "text-uppercase",
                    "mb-0",
                  ],
                  [1, "divider-custom-icon"],
                  [1, "fas", "fa-star"],
                  [
                    "src",
                    "assets/img/portfolio/cabin.png",
                    "alt",
                    "",
                    1,
                    "img-fluid",
                    "rounded",
                    "mb-5",
                  ],
                  [1, "mb-5"],
                  ["data-dismiss", "modal", 1, "btn", "btn-primary"],
                  [1, "fas", "fa-times", "fa-fw"],
                ],
                template: function (t, e) {
                  1 & t &&
                    (si(0, "nav", 0),
                    si(1, "div", 1),
                    si(2, "a", 2),
                    hi(3, "JASMINE IRADA"),
                    ii(),
                    si(4, "button", 3),
                    hi(5, " Menu "),
                    oi(6, "i", 4),
                    ii(),
                    si(7, "div", 5),
                    si(8, "ul", 6),
                    si(9, "li", 7),
                    si(10, "a", 8),
                    hi(11, "About"),
                    ii(),
                    ii(),
                    si(12, "li", 7),
                    si(13, "a", 9),
                    hi(14, "Portfolio"),
                    ii(),
                    ii(),
                    si(15, "li", 7),
                    si(16, "a", 10),
                    hi(17, "Resume"),
                    ii(),
                    ii(),
                    ii(),
                    ii(),
                    ii(),
                    ii(),
                    si(18, "section", 11),
                    si(19, "div", 1),
                    si(20, "h2", 12),
                    hi(21, "Portfolio"),
                    ii(),
                    si(22, "div", 13),
                    oi(23, "div", 14),
                    ii(),
                    si(24, "div", 15),
                    si(25, "app-filters", 16),
                    li("selected_event", function (t) {
                      return e.get_selected(t);
                    }),
                    ii(),
                    si(26, "app-filters", 17),
                    li("selected_event", function (t) {
                      return e.get_selected(t);
                    }),
                    ii(),
                    si(27, "app-filters", 18),
                    li("selected_event", function (t) {
                      return e.get_selected(t);
                    }),
                    ii(),
                    ii(),
                    si(28, "div", 19),
                    oi(29, "app-project-preview", 20),
                    oi(30, "app-project-preview", 21),
                    oi(31, "app-project-preview", 22),
                    oi(32, "app-project-preview", 23),
                    oi(33, "app-project-preview", 24),
                    ii(),
                    ii(),
                    ii(),
                    si(34, "footer", 25),
                    si(35, "div", 1),
                    si(36, "div", 26),
                    si(37, "div", 27),
                    si(38, "h4", 28),
                    hi(39, "Diving Deep into Learning"),
                    ii(),
                    si(40, "a", 29),
                    oi(41, "i", 30),
                    ii(),
                    si(42, "a", 31),
                    oi(43, "i", 32),
                    ii(),
                    si(44, "a", 33),
                    oi(45, "i", 34),
                    ii(),
                    si(46, "a", 35),
                    oi(47, "i", 36),
                    ii(),
                    ii(),
                    ii(),
                    ii(),
                    ii(),
                    si(48, "div", 37),
                    si(49, "div", 1),
                    si(50, "small"),
                    hi(51, "Copyright \xa9 Jasmine Irada 2020"),
                    ii(),
                    ii(),
                    ii(),
                    si(52, "div", 38),
                    si(53, "a", 39),
                    oi(54, "i", 40),
                    ii(),
                    ii(),
                    si(55, "div", 41),
                    si(56, "div", 42),
                    si(57, "div", 43),
                    si(58, "button", 44),
                    si(59, "span", 45),
                    oi(60, "i", 46),
                    ii(),
                    ii(),
                    si(61, "div", 47),
                    si(62, "div", 1),
                    si(63, "div", 48),
                    si(64, "div", 49),
                    si(65, "h2", 50),
                    hi(66, "Log Cabin"),
                    ii(),
                    si(67, "div", 13),
                    oi(68, "div", 14),
                    si(69, "div", 51),
                    oi(70, "i", 52),
                    ii(),
                    oi(71, "div", 14),
                    ii(),
                    oi(72, "img", 53),
                    si(73, "p", 54),
                    hi(
                      74,
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam. "
                    ),
                    ii(),
                    si(75, "button", 55),
                    oi(76, "i", 56),
                    hi(77, " Close Window "),
                    ii(),
                    ii(),
                    ii(),
                    ii(),
                    ii(),
                    ii(),
                    ii(),
                    ii());
                },
                directives: [od, ld, Od, Rd],
                styles: [
                  ".navbar[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], section[_ngcontent-%COMP%]{background-color:#0b2228}.navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-align:right;font-weight:400}.navbar-nav[_ngcontent-%COMP%]{font-size:small}.copyright[_ngcontent-%COMP%]{background-color:#051114}a.badge-pill[_ngcontent-%COMP%]:hover, a.badge[_ngcontent-%COMP%]:hover{background-color:#fd7e14}a.badge-pill[_ngcontent-%COMP%]:active, a.badge[_ngcontent-%COMP%]:active{background-color:#803300}.hidden[_ngcontent-%COMP%]{display:none}.flex-wrapper[_ngcontent-%COMP%]{display:flex;min-height:100vh;flex-direction:column;justify-content:space-between}li[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]{list-style-type:none;margin:none;padding:none}.text-80[_ngcontent-%COMP%]{font-size:80%;margin:0;padding:0}",
                ],
              })),
              t
            );
          })(),
        },
        {
          path: "About",
          component: (() => {
            class t {
              constructor(t) {
                this.router = t;
              }
              ngOnInit() {}
            }
            return (
              (t.ɵfac = function (e) {
                return new (e || t)(ti(sd));
              }),
              (t.ɵcmp = qt({
                type: t,
                selectors: [["app-about"]],
                decls: 241,
                vars: 0,
                consts: [
                  ["id", "page-top"],
                  [
                    "id",
                    "mainNav",
                    1,
                    "navbar",
                    "navbar-expand-lg",
                    "text-uppercase",
                    "fixed-top",
                  ],
                  [1, "container"],
                  ["href", "#page-top", 1, "js-scroll-trigger"],
                  [
                    "type",
                    "button",
                    "data-toggle",
                    "collapse",
                    "data-target",
                    "#navbarResponsive",
                    "aria-controls",
                    "navbarResponsive",
                    "aria-expanded",
                    "false",
                    "aria-label",
                    "Toggle navigation",
                    1,
                    "navbar-toggler",
                    "navbar-toggler-right",
                    "text-uppercase",
                    "text-white",
                    "rounded",
                  ],
                  [1, "fas", "fa-bars"],
                  ["id", "navbarResponsive", 1, "collapse", "navbar-collapse"],
                  [1, "navbar-nav", "ml-auto"],
                  [1, "nav-item", "mx-0", "mx-lg-1"],
                  [
                    "routerLink",
                    "/About",
                    "routerLinkActive",
                    "active",
                    1,
                    "nav-link",
                    "my-3",
                    "my-lg-0",
                    "px-0",
                    "px-lg-3",
                    "rounded",
                    "js-scroll-trigger",
                  ],
                  [
                    "routerLink",
                    "/Portfolio",
                    "routerLinkActive",
                    "active",
                    1,
                    "nav-link",
                    "my-3",
                    "my-lg-0",
                    "px-0",
                    "px-lg-3",
                    "rounded",
                    "js-scroll-trigger",
                  ],
                  [
                    "target",
                    "_blank",
                    "href",
                    "https://drive.google.com/file/d/1H18dQx-U2BO1mgFXNuwFs9mMy0ebcHDu/view?usp=sharing",
                    1,
                    "nav-link",
                    "my-3",
                    "my-lg-0",
                    "px-0",
                    "px-lg-3",
                    "rounded",
                    "js-scroll-trigger",
                  ],
                  [
                    1,
                    "sidebar",
                    "d-none",
                    "d-lg-block",
                    "pt-2",
                    "pl-5",
                    "fixed-bottom",
                    "text-white",
                  ],
                  [
                    "target",
                    "_blank",
                    "href",
                    "https://github.com/airada",
                    "aria-label",
                    "Checkout my GitHub",
                    1,
                    "btn-social-custom",
                    "mx-2",
                  ],
                  [1, "fab", "fa-fw", "fa-github", "fa-lg"],
                  [
                    "target",
                    "_blank",
                    "href",
                    "https://rninchan.itch.io/",
                    "aria-label",
                    "Checkout my games on Itch.io",
                    1,
                    "btn-social-custom",
                    "mx-2",
                  ],
                  [1, "fab", "fa-fw", "fa-itch-io", "fa-lg"],
                  [
                    "target",
                    "_blank",
                    "href",
                    "https://www.linkedin.com/in/jasmineirada/",
                    "aria-label",
                    "Connect with me on Linkedin",
                    1,
                    "btn-social-custom",
                    "mx-2",
                  ],
                  [1, "fab", "fa-fw", "fa-linkedin", "fa-lg"],
                  [
                    "target",
                    "_blank",
                    "href",
                    "mailto:jasmineirada@gmail.com",
                    "aria-label",
                    "Send me an email",
                    1,
                    "btn-social-custom",
                    "mx-2",
                  ],
                  [1, "fas", "fa-fw", "fa-envelope", "fa-lg"],
                  [
                    1,
                    "container",
                    "d-flex",
                    "align-items-center",
                    "justify-content-center",
                  ],
                  [
                    1,
                    "d-none",
                    "d-md-block",
                    "bottom-align-text",
                    "text-white",
                    "text-center",
                    "p-5",
                    "mb-lg-5",
                  ],
                  [1, "name-text"],
                  [
                    1,
                    "d-md-none",
                    "bottom-align-text",
                    "text-white",
                    "text-left",
                    "ml-3",
                    "mb-md-5",
                  ],
                  [1, "text-dark", "p-3"],
                  [1, "container", "bg-light", "border", "rounded", "p-3"],
                  [
                    "data-aos",
                    "zoom-in",
                    "data-aos-duration",
                    "500",
                    "data-aos-easing",
                    "ease-in-out",
                    "data-aos-once",
                    "true",
                    "data-aos-anchor-placement",
                    "top-center",
                  ],
                  [1, "text-center", "text-uppercase", "text-dark"],
                  [1, "divider-custom", "divider-dark"],
                  [1, "divider-custom-line"],
                  [1, "row"],
                  [1, "col-lg-6", "d-flex", "justify-content-center"],
                  [
                    "data-aos",
                    "flip-up",
                    "data-aos-duration",
                    "750",
                    "data-aos-easing",
                    "ease-in-out",
                    "data-aos-once",
                    "true",
                    "data-aos-anchor-placement",
                    "top-center",
                  ],
                  [1, "card", "mx-auto", "mr-lg-5", "card-size"],
                  [
                    "src",
                    "/assets/img/avataaars.svg",
                    "alt",
                    "Smiling Girl Avatar Icon",
                    1,
                    "card-img-top",
                    "mx-auto",
                    2,
                    "height",
                    "8rem",
                    "width",
                    "8rem",
                  ],
                  [1, "card-body"],
                  [1, "d-none", "d-md-block"],
                  [1, "card-text", "text-center"],
                  [1, "d-md-none"],
                  [1, "card", "mx-auto", "ml-lg-5", "card-size"],
                  [
                    "src",
                    "assets/img/graduation-cap-solid.svg",
                    "alt",
                    "Graduation Cap Icon",
                    1,
                    "card-img-top",
                    "mx-auto",
                    "mt-4",
                    "p-4",
                    "rounded-circle",
                    "bg-dark",
                    2,
                    "height",
                    "6rem",
                    "width",
                    "6rem",
                  ],
                  [
                    "src",
                    "assets/img/lightbulb-regular.svg",
                    "alt",
                    "Lightbulb Icon",
                    1,
                    "card-img-top",
                    "mx-auto",
                    "mt-4",
                    "p-4",
                    "rounded-circle",
                    "bg-dark",
                    2,
                    "height",
                    "6rem",
                    "width",
                    "6rem",
                  ],
                  [
                    "src",
                    "assets/img/laptop-code-solid.svg",
                    "alt",
                    "Laptop with Code brackets Icon",
                    1,
                    "card-img-top",
                    "mx-auto",
                    "mt-4",
                    "p-4",
                    "rounded-circle",
                    "bg-dark",
                    2,
                    "height",
                    "6rem",
                    "width",
                    "6rem",
                  ],
                  ["id", "portfolio", 1, "page-section", "portfolio"],
                  [
                    "data-aos",
                    "zoom-in",
                    "data-aos-delay",
                    "100",
                    "data-aos-duration",
                    "1000",
                    "data-aos-easing",
                    "ease-in-out",
                    "data-aos-once",
                    "true",
                    "data-aos-anchor-placement",
                    "top-center",
                  ],
                  [1, "text-center", "text-white", "text-uppercase", "mb-0"],
                  [1, "divider-custom"],
                  [
                    "data-aos",
                    "fade-up",
                    "data-aos-delay",
                    "50",
                    "data-aos-duration",
                    "1000",
                    "data-aos-easing",
                    "ease-in-out",
                    "data-aos-once",
                    "true",
                    "data-aos-anchor-placement",
                    "top-center",
                  ],
                  [1, "col-md-6", "mt-md-5"],
                  [
                    1,
                    "text-center",
                    "text-sm-center",
                    "text-md-right",
                    "text-uppercase",
                    "text-white",
                    "mb-0",
                  ],
                  [1, "col-md-6", "mt-3"],
                  [
                    1,
                    "col",
                    "col-md-6",
                    "mt-md-3",
                    "my-2",
                    "text-white",
                    "d-flex",
                    "align-items-center",
                  ],
                  [1, "badge", "badge-pill"],
                  [1, "col-12", "col-md-6"],
                  [
                    "data-toggle",
                    "modal",
                    "data-target",
                    "#portfolioModal1",
                    1,
                    "portfolio-item",
                    "justify-content-center",
                  ],
                  [
                    1,
                    "portfolio-item-caption",
                    "d-flex",
                    "align-items-center",
                    "justify-content-center",
                    "h-100",
                    "w-100",
                  ],
                  [
                    1,
                    "portfolio-item-caption-content",
                    "text-center",
                    "text-white",
                  ],
                  [
                    "src",
                    "/assets/img/portfolio/mimi/prototype.png",
                    "alt",
                    "Mimi AI Website Preview",
                    1,
                    "img-fluid",
                  ],
                  [1, "col", "col-md-6", "mb-5"],
                  [
                    1,
                    "row",
                    "text-white",
                    "mt-3",
                    "mt-md-0",
                    "mb-0",
                    "mx-auto",
                    "mx-sm-auto",
                  ],
                  [1, "lead", "text-left"],
                  [1, "mt-5"],
                  [
                    "href",
                    "https://github.com/airada/happy-for-you",
                    "aria-label",
                    "View the source code",
                    1,
                    "mx-2",
                  ],
                  [1, "fab", "fa-github", "fa-2x"],
                  [
                    "href",
                    "https://mimi-ai.herokuapp.com/",
                    "aria-label",
                    "Checkout the project online",
                    1,
                    "mx-2",
                  ],
                  [1, "fas", "fa-external-link-alt", "fa-2x"],
                  [
                    "src",
                    "/assets/img/portfolio/obviouspalace/start_screen.png",
                    "alt",
                    "Crystal Crisis Start Screen Preview",
                    1,
                    "img-fluid",
                  ],
                  ["href", "https://jasmineirada.com/obviouspalace/"],
                  [
                    "href",
                    "https://github.com/magks/magic-missile",
                    "aria-label",
                    "View the source code",
                    1,
                    "mx-2",
                  ],
                  [
                    "href",
                    "https://jasmineirada.com/obviouspalace/",
                    "aria-label",
                    "Check out the promotional website for the game",
                    1,
                    "mx-2",
                  ],
                  [
                    "src",
                    "/assets/img/portfolio/athenahacks/escaping_the_negativity_preview.png",
                    "alt",
                    "Escaping the Negativity Game Art Preview",
                    1,
                    "img-fluid",
                  ],
                  [
                    1,
                    "row",
                    "mt-3",
                    "mt-md-0",
                    "mb-0",
                    "mx-auto",
                    "mx-sm-auto",
                    "text-white",
                  ],
                  [
                    "href",
                    "https://devpost.com/software/escaping-the-negativity",
                  ],
                  [
                    "href",
                    "https://github.com/airada/AH_2019",
                    "aria-label",
                    "View the source code",
                    1,
                    "mx-2",
                  ],
                  [
                    "href",
                    "https://devpost.com/software/escaping-the-negativity",
                    "aria-label",
                    "View the DevPost",
                    1,
                    "mx-2",
                  ],
                  [1, "footer", "text-center"],
                  [1, "col", "mb-5", "mb-lg-0"],
                  [1, "name-custom", "mb-4"],
                  [
                    "target",
                    "_blank",
                    "href",
                    "https://github.com/airada",
                    "aria-label",
                    "Checkout my GitHub",
                    1,
                    "btn",
                    "btn-outline-light",
                    "btn-social",
                    "mx-1",
                  ],
                  [1, "fab", "fa-fw", "fa-github", 2, "color", "#FFFFFF"],
                  [
                    "target",
                    "_blank",
                    "href",
                    "https://rninchan.itch.io/",
                    "aria-label",
                    "Checkout my games on Itch.io",
                    1,
                    "btn",
                    "btn-outline-light",
                    "btn-social",
                    "mx-1",
                  ],
                  [1, "fab", "fa-fw", "fa-itch-io", 2, "color", "#FFFFFF"],
                  [
                    "target",
                    "_blank",
                    "href",
                    "https://www.linkedin.com/in/jasmineirada/",
                    "aria-label",
                    "Let's connect on LinkedIn",
                    1,
                    "btn",
                    "btn-outline-light",
                    "btn-social",
                    "mx-1",
                  ],
                  [1, "fab", "fa-fw", "fa-linkedin", 2, "color", "#FFFFFF"],
                  [
                    "target",
                    "_blank",
                    "href",
                    "mailto:jasmineirada@gmail.com",
                    "aria-label",
                    "Send me an email",
                    1,
                    "btn",
                    "btn-outline-light",
                    "btn-social",
                    "mx-1",
                  ],
                  [1, "fas", "fa-fw", "fa-envelope", 2, "color", "#FFFFFF"],
                  [1, "copyright", "py-4", "text-center", "text-white"],
                  [1, "scroll-to-top", "d-lg-none", "position-fixed"],
                  [
                    "href",
                    "#page-top",
                    "aria-label",
                    "Go back to top of page",
                    1,
                    "js-scroll-trigger",
                    "d-block",
                    "text-center",
                    "text-white",
                    "rounded",
                  ],
                  [1, "fa", "fa-chevron-up"],
                ],
                template: function (t, e) {
                  1 & t &&
                    (si(0, "div", 0),
                    si(1, "nav", 1),
                    si(2, "div", 2),
                    si(3, "a", 3),
                    hi(4, "JASMINE IRADA"),
                    ii(),
                    si(5, "button", 4),
                    hi(6, " Menu "),
                    oi(7, "i", 5),
                    ii(),
                    si(8, "div", 6),
                    si(9, "ul", 7),
                    si(10, "li", 8),
                    si(11, "a", 9),
                    hi(12, "About"),
                    ii(),
                    ii(),
                    si(13, "li", 8),
                    si(14, "a", 10),
                    hi(15, "Portfolio"),
                    ii(),
                    ii(),
                    si(16, "li", 8),
                    si(17, "a", 11),
                    hi(18, "Resume"),
                    ii(),
                    ii(),
                    ii(),
                    ii(),
                    ii(),
                    ii(),
                    si(19, "div", 12),
                    si(20, "a", 13),
                    oi(21, "i", 14),
                    ii(),
                    si(22, "a", 15),
                    oi(23, "i", 16),
                    ii(),
                    si(24, "a", 17),
                    oi(25, "i", 18),
                    ii(),
                    si(26, "a", 19),
                    oi(27, "i", 20),
                    ii(),
                    ii(),
                    si(28, "header"),
                    si(29, "div", 21),
                    si(30, "div", 22),
                    si(31, "p", 23),
                    hi(32, "JASMINE IRADA"),
                    ii(),
                    si(33, "h4"),
                    hi(34, "SOFTWARE ENGINEER"),
                    ii(),
                    si(35, "p"),
                    hi(
                      36,
                      "Diving deep into the intersection between technology, art, and design."
                    ),
                    ii(),
                    ii(),
                    si(37, "div", 24),
                    si(38, "p", 23),
                    hi(39, "JASMINE IRADA"),
                    ii(),
                    si(40, "h4"),
                    hi(41, "SOFTWARE ENGINEER"),
                    ii(),
                    si(42, "p"),
                    hi(
                      43,
                      "Diving deep into the intersection between technology, art, and design."
                    ),
                    ii(),
                    ii(),
                    ii(),
                    ii(),
                    si(44, "section", 25),
                    si(45, "div", 26),
                    si(46, "div", 27),
                    si(47, "h2", 28),
                    hi(48, "ABOUT ME "),
                    ii(),
                    ii(),
                    si(49, "div", 29),
                    oi(50, "div", 30),
                    ii(),
                    si(51, "div", 31),
                    si(52, "div", 32),
                    si(53, "div", 33),
                    si(54, "div", 34),
                    oi(55, "img", 35),
                    si(56, "div", 36),
                    si(57, "div", 37),
                    si(58, "p", 38),
                    hi(59, "Hi! My name is Arielle "),
                    si(60, "b"),
                    hi(61, "Jasmine"),
                    ii(),
                    hi(62, " Michelle Irada. (she/her)"),
                    ii(),
                    ii(),
                    si(63, "div", 39),
                    si(64, "small"),
                    si(65, "p", 38),
                    hi(66, "Hi! My name is Arielle "),
                    si(67, "b"),
                    hi(68, "Jasmine"),
                    ii(),
                    hi(69, " Michelle Irada. (she/her)"),
                    ii(),
                    ii(),
                    ii(),
                    ii(),
                    ii(),
                    ii(),
                    si(70, "div", 33),
                    si(71, "div", 40),
                    oi(72, "img", 41),
                    si(73, "div", 36),
                    si(74, "div", 37),
                    si(75, "p", 38),
                    hi(
                      76,
                      " I graduated from the University of California, Irvine (UCI) with a B.S. in Computer Science."
                    ),
                    ii(),
                    ii(),
                    si(77, "div", 39),
                    si(78, "small"),
                    si(79, "p", 38),
                    hi(
                      80,
                      " I graduated from the University of California, Irvine (UCI) with a B.S. in Computer Science"
                    ),
                    ii(),
                    ii(),
                    ii(),
                    ii(),
                    ii(),
                    ii(),
                    ii(),
                    si(81, "div", 32),
                    si(82, "div", 33),
                    si(83, "div", 34),
                    oi(84, "img", 42),
                    si(85, "div", 36),
                    si(86, "div", 37),
                    si(87, "p", 38),
                    hi(
                      88,
                      "I transform creative visions into impactful, successful products. "
                    ),
                    ii(),
                    ii(),
                    si(89, "div", 39),
                    si(90, "small"),
                    si(91, "p", 38),
                    hi(
                      92,
                      "I transform creative visions into impactful, successful products. "
                    ),
                    ii(),
                    ii(),
                    ii(),
                    ii(),
                    ii(),
                    ii(),
                    si(93, "div", 33),
                    si(94, "div", 40),
                    oi(95, "img", 43),
                    si(96, "div", 36),
                    si(97, "div", 37),
                    si(98, "p", 38),
                    hi(
                      99,
                      "I'm looking for opportunities that allow me to grow as a developer."
                    ),
                    ii(),
                    ii(),
                    si(100, "div", 39),
                    si(101, "small"),
                    si(102, "p", 38),
                    hi(
                      103,
                      "I'm looking for opportunities that allow me to grow as a developer."
                    ),
                    ii(),
                    ii(),
                    ii(),
                    ii(),
                    ii(),
                    ii(),
                    ii(),
                    ii(),
                    ii(),
                    ii(),
                    si(104, "section", 44),
                    si(105, "div", 2),
                    si(106, "div", 45),
                    si(107, "h2", 46),
                    hi(108, "Featured Work"),
                    ii(),
                    ii(),
                    si(109, "div", 47),
                    oi(110, "div", 30),
                    ii(),
                    si(111, "div", 48),
                    si(112, "div", 31),
                    oi(113, "div", 49),
                    si(114, "div", 49),
                    si(115, "h4", 50),
                    hi(116, "Mimi AI: Happy For You"),
                    ii(),
                    ii(),
                    ii(),
                    si(117, "div", 31),
                    oi(118, "div", 51),
                    si(119, "div", 52),
                    si(120, "a", 53),
                    hi(121, "Python"),
                    ii(),
                    si(122, "a", 53),
                    hi(123, "Angular"),
                    ii(),
                    si(124, "a", 53),
                    hi(125, "Bootstrap"),
                    ii(),
                    si(126, "a", 53),
                    hi(127, "Design"),
                    ii(),
                    ii(),
                    ii(),
                    si(128, "div", 31),
                    si(129, "div", 54),
                    si(130, "div", 55),
                    si(131, "div", 56),
                    oi(132, "div", 57),
                    ii(),
                    oi(133, "img", 58),
                    ii(),
                    ii(),
                    si(134, "div", 59),
                    si(135, "div", 60),
                    si(136, "p", 61),
                    hi(
                      137,
                      "Game-based task-list system with user achievements and motivational chatbot companion. "
                    ),
                    oi(138, "br"),
                    hi(
                      139,
                      " Self-taught NLP and deep learning concepts to deploy chatbot using PyTorch and NLTK. I'm currently improving prototype design and incorporating game and task-list features."
                    ),
                    ii(),
                    ii(),
                    si(140, "div", 62),
                    si(141, "a", 63),
                    oi(142, "i", 64),
                    ii(),
                    si(143, "a", 65),
                    oi(144, "i", 66),
                    ii(),
                    ii(),
                    ii(),
                    ii(),
                    ii(),
                    si(145, "div", 48),
                    si(146, "div", 31),
                    oi(147, "div", 49),
                    si(148, "div", 49),
                    si(149, "h4", 50),
                    hi(150, "Crystal Crysis"),
                    ii(),
                    ii(),
                    ii(),
                    si(151, "div", 31),
                    oi(152, "div", 51),
                    si(153, "div", 52),
                    si(154, "a", 53),
                    hi(155, "C#"),
                    ii(),
                    si(156, "a", 53),
                    hi(157, "Unity"),
                    ii(),
                    si(158, "a", 53),
                    hi(159, "Art"),
                    ii(),
                    si(160, "a", 53),
                    hi(161, "Project Management"),
                    ii(),
                    ii(),
                    ii(),
                    si(162, "div", 31),
                    si(163, "div", 54),
                    si(164, "div", 55),
                    si(165, "div", 56),
                    oi(166, "div", 57),
                    ii(),
                    oi(167, "img", 67),
                    ii(),
                    ii(),
                    si(168, "div", 59),
                    si(169, "div", 60),
                    si(170, "p"),
                    hi(171, "2D Run 'N Gun "),
                    oi(172, "br"),
                    si(173, "i"),
                    si(174, "a", 68),
                    hi(175, "Obvious Palace"),
                    ii(),
                    ii(),
                    ii(),
                    si(176, "p", 61),
                    hi(
                      177,
                      "Full-fledged game complete with a promotional website and a demo reel. I managed a team of 6 to meet sprint deadlines and uphold high quality communication and collaborative workflows between different roles."
                    ),
                    ii(),
                    ii(),
                    si(178, "div", 62),
                    si(179, "a", 69),
                    oi(180, "i", 64),
                    ii(),
                    si(181, "a", 70),
                    oi(182, "i", 66),
                    ii(),
                    ii(),
                    ii(),
                    ii(),
                    ii(),
                    si(183, "div", 48),
                    si(184, "div", 31),
                    oi(185, "div", 49),
                    si(186, "div", 49),
                    si(187, "h4", 50),
                    hi(188, "Escaping the Negativity"),
                    ii(),
                    ii(),
                    ii(),
                    si(189, "div", 31),
                    oi(190, "div", 51),
                    si(191, "div", 52),
                    si(192, "a", 53),
                    hi(193, "C#"),
                    ii(),
                    si(194, "a", 53),
                    hi(195, "Unity"),
                    ii(),
                    si(196, "a", 53),
                    hi(197, "Design"),
                    ii(),
                    ii(),
                    ii(),
                    si(198, "div", 31),
                    si(199, "div", 54),
                    si(200, "div", 55),
                    si(201, "div", 56),
                    oi(202, "div", 57),
                    ii(),
                    oi(203, "img", 71),
                    ii(),
                    ii(),
                    si(204, "div", 59),
                    si(205, "div", 72),
                    si(206, "p"),
                    si(207, "b"),
                    hi(208, "BEST GAME SPONSORED BY ACTIVISION"),
                    ii(),
                    oi(209, "br"),
                    si(210, "i"),
                    si(211, "a", 73),
                    hi(212, "AthenaHacks 2019"),
                    ii(),
                    ii(),
                    ii(),
                    si(213, "p", 61),
                    hi(
                      214,
                      "A maze game symbolizing deep-seated negativity, based on struggles for women in technology."
                    ),
                    ii(),
                    ii(),
                    si(215, "div", 62),
                    si(216, "a", 74),
                    oi(217, "i", 64),
                    ii(),
                    si(218, "a", 75),
                    oi(219, "i", 66),
                    ii(),
                    ii(),
                    ii(),
                    ii(),
                    ii(),
                    ii(),
                    ii(),
                    si(220, "footer", 76),
                    si(221, "div", 2),
                    si(222, "div", 31),
                    si(223, "div", 77),
                    si(224, "p", 78),
                    hi(225, "Diving Deep into Learning"),
                    ii(),
                    si(226, "a", 79),
                    oi(227, "i", 80),
                    ii(),
                    si(228, "a", 81),
                    oi(229, "i", 82),
                    ii(),
                    si(230, "a", 83),
                    oi(231, "i", 84),
                    ii(),
                    si(232, "a", 85),
                    oi(233, "i", 86),
                    ii(),
                    ii(),
                    ii(),
                    ii(),
                    ii(),
                    si(234, "div", 87),
                    si(235, "div", 2),
                    si(236, "small"),
                    hi(237, "Copyright \xa9 Jasmine Irada 2020"),
                    ii(),
                    ii(),
                    ii(),
                    si(238, "div", 88),
                    si(239, "a", 89),
                    oi(240, "i", 90),
                    ii(),
                    ii(),
                    ii());
                },
                directives: [od, ld],
                styles: [
                  ".navbar[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], section[_ngcontent-%COMP%]{background-color:#0b2228}header[_ngcontent-%COMP%]{background:url(fish.d06c2260e5e1563d9ab0.svg) no-repeat 50%;background-size:cover;-o-background-size:cover;background-color:#0b2228}a.badge-pill[_ngcontent-%COMP%]:hover, a.badge[_ngcontent-%COMP%]:hover{background-color:transparent;color:#fff;font-weight:400}a.badge[_ngcontent-%COMP%], a.badge-pill[_ngcontent-%COMP%], a.border[_ngcontent-%COMP%]{background-color:#fd7e14;font-weight:400}i[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fd7e14}i[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#803300}.navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-align:right;font-weight:400}.overlay[_ngcontent-%COMP%]{background-color:#164450}.navbar-nav[_ngcontent-%COMP%]{font-size:small}.name-text[_ngcontent-%COMP%]{font-size:large}.card[_ngcontent-%COMP%]{background-color:#f8f9fa}.copyright[_ngcontent-%COMP%]{background-color:#051114}.sidebar[_ngcontent-%COMP%]{width:100px;position:fixed;bottom:75px;left:0;overflow-x:hidden}.sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;font-size:20px;color:#fd7e14;display:block}.sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#803300}.bottom-align-text[_ngcontent-%COMP%]{position:absolute;bottom:0;right:0;left:0}.card-size[_ngcontent-%COMP%]{width:13rem;height:20rem}@media only screen and (max-width:600px){.card-size[_ngcontent-%COMP%]{width:10rem;height:15rem}}li[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]{list-style-type:none;margin:none;padding:none}.text-80[_ngcontent-%COMP%]{font-size:80%;margin:0;padding:0}",
                ],
              })),
              t
            );
          })(),
        },
        { path: "ProjectPreview", component: Rd },
        { path: "Filters", component: Od },
      ];
      let jd = (() => {
          class t {}
          return (
            (t.ɵmod = Gt({ type: t })),
            (t.ɵinj = lt({
              factory: function (e) {
                return new (e || t)();
              },
              imports: [
                [_d.forRoot(Pd, { relativeLinkResolution: "legacy" })],
                _d,
              ],
            })),
            t
          );
        })(),
        Nd = (() => {
          class t {
            constructor(t) {
              (this.router = t), (this.title = "Jasmine Irada | Portfolio");
            }
            ngOnInit() {
              this.router.navigate(["About"]);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(ti(sd));
            }),
            (t.ɵcmp = qt({
              type: t,
              selectors: [["app-root"]],
              decls: 1,
              vars: 0,
              template: function (t, e) {
                1 & t && oi(0, "router-outlet");
              },
              directives: [cd],
              styles: [""],
            })),
            t
          );
        })(),
        Md = (() => {
          class t {}
          return (
            (t.ɵmod = Gt({ type: t, bootstrap: [Nd] })),
            (t.ɵinj = lt({
              factory: function (e) {
                return new (e || t)();
              },
              providers: [],
              imports: [[Hl, jd]],
            })),
            t
          );
        })();
      (function () {
        if (on)
          throw new Error("Cannot enable prod mode after platform setup.");
        sn = !1;
      })(),
        Ll()
          .bootstrapModule(Md)
          .catch((t) => console.error(t));
    },
    zn8P: function (t, e) {
      function n(t) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + t + "'");
          throw ((e.code = "MODULE_NOT_FOUND"), e);
        });
      }
      (n.keys = function () {
        return [];
      }),
        (n.resolve = n),
        (t.exports = n),
        (n.id = "zn8P");
    },
  },
  [[0, 0]],
]);
