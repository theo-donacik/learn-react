// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
//import Profile from './components/profile_props'
//import Gallery from './qcomps/gallery_props'
//import List from './qcomps/list_keys_id'
//import PackingList from './qcomps/props_item'
//import RecipeList from './qcomps/recipes'
import Form from './qcomps/stuckForm'
import Gallery from './qcomps/state'
import RequestTracker from './qcomps/shoppingCart'
import Scoreboard from './qcomps/updObjectsForm'
import List from './qcomps/artistsRemoveArr'
import BucketList from './qcomps/arrObj'

export default function Home() {
  return (
    <>
      <Gallery/>
      <Form/>
      <RequestTracker/>
      <br/>
      <Scoreboard/>
      <List/>
      <BucketList/>
    </>
  )
}
