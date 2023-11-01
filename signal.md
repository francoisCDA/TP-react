#Signal 

référence : https://www.youtube.com/watch?v=SO8lBVWF2Y8

##installation
npm i @preact/signals-react

##utilisation de base

import {signals} from "@preact/signals-react"

const maVar = signal("info")

console.log(maVar.value) // 'info' attendu

##utilisation avec local storage

const dataSave = signal(backup())

function backup() {
 const ds = localStorage.getItem(CLE_DATA)
 if (ds == null) return []
 return JSON.parse(ds)
}


dataSave.value = [...dataSave.value, {nouvelobjet: 'data'}]

//équivalent des useEffect avec les signals:
effect(() => { localStorage.setItem(CLE_DATA, JSON.stringify(dataSave.value) })

## utilisation entre plusieurs composant

export info = signal('madonnée') //composant1.jsx


import {info} from './composant1'
console.log(info.value)

## utilisation d'un comput signal (signal fait à paritir d'un signal)

import {info} from './composant1'

const presentation = computed( () => { 
 return `les infos du jours sont ${info.value}` 
})

console.log(presentation.value) // expected : les infos du jours sont madonnée


## pour être utilisé à l'intérieur d'un composant :

les hook : useSignal et useSignalEffect


## il est possible de passer des signals dans les props.
