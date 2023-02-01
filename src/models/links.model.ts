import { db } from "../database/firebase"
import { v4 as uuidv4 } from 'uuid';

export type Link = {
    slug?: string
    ios: object
    android: object
    web: string
}

export class LinkModel {
    async create(link: Link) {
        try {
            const slug = `${link.slug || uuidv4()}`
            const linkRef = db.collection('links').doc(slug)
            const result = await linkRef.set({
                "slug": slug,
                "ios": link.ios,
                "android": link.android,
                "web": link.web
            }, { merge: true })
            return slug
        } catch (error) {
            throw new Error('Error on create link!')
        }
    }
    async getAll() {
        try {
            const linkRef = db.collection('links')
            const result = await linkRef.get()
            return result.docs.map(doc => doc.data())
        } catch (error) {
            throw new Error('Error on get all orders!')
        }
    }
}
