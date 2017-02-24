*
  *
  *
  * http://www.dustjs.com/
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * {?id}{id}{:else}{name}{/id}
 * Ternary or if (if complicated enough)
 *
 * IF / ELSE
 * {?lap}lap{/lap}
 * {lap ? 'lap': ''}
 *
 * {?restricted}restricted{/restricted}"
 * {restricted}
 *
 * SECTION
 * {#errorText} {msg} {/errorText}
 * this is IF with CONTEXT switch
 *
 * if (errorText) {
 *  return {errorText.msg}
 * }
 *
 * erorrText && errorText.message? //TODO: TEST this with multiple errors, etc
 *
 *
 * {@pre type="content" key="note.addANoteOptional" editable="false" /}
 * dust makara content magic - https://www.npmjs.com/package/makara
 *
 * editable="false" means no metadata magic will be rendered <edit> tags
 * TODO: learn more about that
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~/
