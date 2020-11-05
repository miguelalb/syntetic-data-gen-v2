<template>
  <v-container>
    <v-row>
      <v-col >
        <v-card
        class="mx-auto my-5"
        max-width="960"
        
        >
          <v-img
          class="white--text align-end"
          height="150px"
          src="../assets/editoroverlay.jpg"
          id="card-img"
          >
            <v-card-title
            id="card-title"
            >My Awesome Text Editor</v-card-title>
          </v-img>
         
        
        <div class="editor">
          <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
            <div class="menubar" style="border-bottom: 1px solid #605b4f">
              <v-btn
                text
                icon
                :color="iconsColor"
                class="menubar__button"
                :class="{ 'is-active': isActive.bold() }"
                @click="commands.bold"
              >
                <v-icon>mdi-format-bold</v-icon>
              </v-btn>

              <v-btn
                text
                icon
                :color="iconsColor"
                class="menubar__button"
                :class="{ 'is-active': isActive.italic() }"
                @click="commands.italic"
              >
                <v-icon>mdi-format-italic</v-icon>
              </v-btn>

              <v-btn
                text
                icon
                :color="iconsColor"
                class="menubar__button"
                :class="{ 'is-active': isActive.strike() }"
                @click="commands.strike"
              >
                <v-icon>mdi-format-strikethrough-variant</v-icon>
              </v-btn>

              <v-btn
                text
                icon
                :color="iconsColor"
                class="menubar__button"
                :class="{ 'is-active': isActive.underline() }"
                @click="commands.underline"
              >
                <v-icon>mdi-format-underline</v-icon>
              </v-btn>

              <v-btn
                text
                icon
                :color="iconsColor"
                class="menubar__button"
                :class="{ 'is-active': isActive.code() }"
                @click="commands.code"
              >
                <v-icon>mdi-code-tags</v-icon>
              </v-btn>

              <v-btn
                text
                icon
                :color="iconsColor"
                class="menubar__button"
                :class="{ 'is-active': isActive.paragraph() }"
                @click="commands.paragraph"
              >
                <v-icon>mdi-format-paragraph</v-icon>
              </v-btn>

              <v-btn
                text
                icon
                :color="iconsColor"
                class="menubar__button"
                :class="{ 'is-active': isActive.heading({ level: 1 }) }"
                @click="commands.heading({ level: 1 })"
              >
                H1
              </v-btn>

              <v-btn
                text
                icon
                :color="iconsColor"
                class="menubar__button"
                :class="{ 'is-active': isActive.heading({ level: 2 }) }"
                @click="commands.heading({ level: 2 })"
              >
                H2
              </v-btn>

              <v-btn
                text
                icon
                :color="iconsColor"
                class="menubar__button"
                :class="{ 'is-active': isActive.heading({ level: 3 }) }"
                @click="commands.heading({ level: 3 })"
              >
                H3
              </v-btn>

              <v-btn
                text
                icon
                :color="iconsColor"
                class="menubar__button"
                :class="{ 'is-active': isActive.bullet_list() }"
                @click="commands.bullet_list"
              >
                <v-icon>mdi-format-list-bulleted</v-icon>
              </v-btn>

              <v-btn
                text
                icon
                :color="iconsColor"
                class="menubar__button"
                :class="{ 'is-active': isActive.ordered_list() }"
                @click="commands.ordered_list"
              >
                <v-icon>mdi-format-list-numbered</v-icon>
              </v-btn>

              <v-btn
                text
                icon
                :color="iconsColor"
                class="menubar__button"
                :class="{ 'is-active': isActive.blockquote() }"
                @click="commands.blockquote"
              >
                <v-icon>mdi-format-quote-open</v-icon>
              </v-btn>

              <v-btn 
                text
                icon
                :color="iconsColor"
                class="menubar__button float-right" @click="exportPdf">
                <v-icon>mdi-file-pdf</v-icon>
              </v-btn>

              <v-btn 
                text
                icon
                :color="iconsColor"
                class="menubar__button float-right" @click="commands.redo">
                <v-icon>mdi-redo</v-icon>
              </v-btn>

              <v-btn 
                text
                icon
                :color="iconsColor"
                class="menubar__button float-right" @click="commands.undo">
                <v-icon>mdi-undo</v-icon>
              </v-btn>
              
            </div>
          </editor-menu-bar>
          
          <v-card-text>
            <editor-content class="editor__content" :editor="editor"/>
          </v-card-text>
        </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import html2pdf from 'html2pdf.js'
import { Editor, EditorContent, EditorMenuBar } from "tiptap";
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  HorizontalRule,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History,
} from "tiptap-extensions";

export default {
  name: 'textEditor',
  components: {
    EditorContent,
    EditorMenuBar,
  },
  data() {
    return {
      iconsColor:"blue lighten-2",
      editor: new Editor({
        extensions: [
          new Blockquote(),
          new BulletList(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new HorizontalRule(),
          new ListItem(),
          new OrderedList(),
          new TodoItem(),
          new TodoList(),
          new Link(),
          new Bold(),
          new Code(),
          new Italic(),
          new Strike(),
          new Underline(),
          new History(),
        ],
        content: `
        <h2>
          Welcome to my text editor!
        </h2>
        <p>
          Click into this text to see the menu! Here you can create your documents!
        </p>
        `,
        onUpdate: ({ getJSON, getHTML}) => {
          this.json = getJSON()
          this.html = getHTML()
        }
      }),
      json: '',
      html: '',
    };
  },
  beforeDestroy() {
    this.editor.destroy();
  },
  methods: {
    exportPdf () {
      html2pdf(this.html, {
        margin: 1,
        filename: 'document.pdf',
        image: { type: 'jpeg', quality: 0.98},
        html2canvas: { dpi: 192, letterRendering: true },
				jsPDF: { unit: 'in', format: 'letter', orientation: 'landscape' }
      })
    }
  }
};
</script>

<style>
  #card-title {
    font-size: 2.3rem;
  }

  
  
</style>