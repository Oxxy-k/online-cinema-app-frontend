import { NextPage } from 'next'

export interface IAuthForm {
	password: string
	email: string
}

export type TypeRoles = {
	isOnlyAdmin?: boolean
	isOnlyUser?: boolean
}

export type NextPageAuth<P extends Object = {}> = NextPage<P> & TypeRoles

export type TypeComponentAuthFields = { Component: TypeRoles }
