import { defineType, defineField } from 'sanity'

export const companyInfo = defineType({
    name: 'companyInfo',
    title: 'Company Information',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Company Name',
            type: 'string',
        }),
        defineField({
            name: 'tagline',
            title: 'Company Tagline',
            type: 'string',
        }),
        defineField({
            name: 'logo',
            title: 'Company Logo',
            type: 'image',
            options: {
                hotspot: true, // Allows you to crop images in the CMS
            },
        }),
    ],
})