import test from 'node:test'
import assert from 'node:assert/strict'
import { pageFromHash, shouldUseIndividualPages, NAV_PAGES, CONTINUOUS_PAGES } from '../src/hooks/usePageNavigation.js'
import { projects } from '../src/data/content.js'

test('every supplied project has an independent route that survives a direct hash', () => {
  for (const project of projects) assert.equal(pageFromHash(`#/works/${project.id}`), `works/${project.id}`)
})

test('old section links and the merged projects link remain valid', () => {
  for (const page of NAV_PAGES) {
    assert.equal(pageFromHash(`#/${page}`), page)
    assert.equal(pageFromHash(`#${page}`), page)
  }
  assert.equal(pageFromHash('#/projects'), 'works')
  assert.equal(pageFromHash('#projects'), 'works')
})

test('an unavailable work returns to the collection; unknown sections return home', () => {
  assert.equal(pageFromHash('#/works/missing-work'), 'works')
  assert.equal(pageFromHash('#/unknown'), 'home')
  assert.equal(pageFromHash(''), 'home')
})

test('touch-capable devices keep continuous navigation even with a fine pointer', () => {
  assert.equal(shouldUseIndividualPages(true, 5), false)
  assert.equal(shouldUseIndividualPages(true, 0), true)
  assert.equal(shouldUseIndividualPages(false, 0), false)
  assert.deepEqual(CONTINUOUS_PAGES, ['home', 'education', 'awards', 'works', 'photos', 'contact'])
})
