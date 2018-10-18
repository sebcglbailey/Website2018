---
title: "Intro to {props.children} in Framer X"
date: "2018-09-16"
description: "A look into using and rendering children in the canvas within Framer X"
author: "Sebastian Bailey"
fileName: "2018-09-16-props-children.md"
keywords:
  - framer
  - react
  - coding
  - prototyping
---

## Framer X

So if you haven't tried out the Framer X Beta yet, don't worry, it should be released soon enough. But for those of you who have managed to get their hands on it, and are a little confused about how to use `props.children` within their code components, read on!

> Sidenote, if you're reading this and it has been released now, read on anyway...

So for those who are used to Framer Studio, Framer X comes with a lot of changes. It's been built completely new from the ground up, with a lot of new ideas and principles to boot.

- A lot of what you know from the design tab is very much the same.
- They've even added some awesome new features like Stacks (and I think soon Grids)
- Say goodbye to `Coffeescript`
- Say hello to `React` and `Typescript`

## What's React?

First things first, if you're going to want to play around with code components in Framer X, you're going to need to learn some React. There's loads of good free resources out there to get you started, so just go ahead and have a look at those before you dive any deeper.

## The juicy stuff

You've gone and learnt some React basics, you've got to grips with some of the odd Typescript syntax, and you want to know how `{props.children}` might possibly get rendered in Framer X?

### Let's start with an example...

![Simple Masonry layout example with cards](/static/media/src/Blog/src/images/2018-09-16-props-children/masonry.png)
*Simple Masonry layout with some basic cards*

As many people will recognise the example above as a Masonry layout, doing lots and lots of these in the same canvas might become a bit tedious.

You might not necessarily know how many columns you might need in any given layout, or even the margin or column width.

You'll want to create a code component to handle this for you right?

This is where `{props.children}` can help!

### Rendering children in React and Framer X

The simplest way to render the children in react is this...

```
class Masonry extends React.Component<Props> {
  render() {
    return(
      <div>
        {props.children}
      </div>
    )
  }
}
```

When you include `{this.props.children}` in your class, Framer X will give you a handy little connector on your code component, where you drag it to another frame on the canvas. Your component will then render whatever is within that frame, in your component.

![A code component linked to a frame on the canvas, which is rendered inside it](/static/media/src/Blog/src/images/2018-09-16-props-children/children-canvas.png)
*A view of the connector between your code component and a frame on the canvas*

### That's not useful!

Right?

It's just rendering what you've already designed!

So how do we get from this to something more like the masonry layout we know?

```
console.log(this.props.children)
```

Add this before you render the component to find out what's going on beneath the hood.

You'll see something like this in your console:

![A console log of the children](/static/media/src/Blog/src/images/2018-09-16-props-children/log_1.png)
*This is the only object in the array of children – the frame your code component is linked to via the connector*

![A console log of the children, expanded, to see the array of all the actual chidlren](/static/media/src/Blog/src/images/2018-09-16-props-children/log_2.png)
*Drill down, and you'll see a much bigger array of children*

### Now we're getting somewhere...

```
let children = this.props.children[0].props.children
```

Now that we have set our `children` array to the actual children of the frame we are referencing, we can start to manipulate them.

Or can we?

Technically, no.

In React, you can't *change* the properties of an existing, or mounted, component. **But you can make a duplicate.**

```
children = React.map(children, (child) => {
  return React.cloneElement(child, {props})
})
```

When you use `React.cloneElement()` you can pass in three arguments, one to reference which React node you want to copy, the second, new properties to apply to the duplicate, and the third, any new or different children.

We want to use the first two arguments.

This way, we can render complete copies of our children (*hint: this is where we can change the `top` and `left` positions of our cards`), and rerender them within our code component.

Hopefully, with all the maths worked out correctly, we'll end up with something looking like this:


![Simple Masonry layout example with text cards](/static/media/src/Blog/src/images/2018-09-16-props-children/masonry.png)
*Simple Masonry layout with some basic cards*

Or this...

![Simple Masonry layout example with image cards](/static/media/src/Blog/src/images/2018-09-16-props-children/masonry-images.png)
*Simple Masonry layout with some image cards*

Or even this!

![Complex Masonry layout example with text and image cards](/static/media/src/Blog/src/images/2018-09-16-props-children/masonry-mixed.png)
*More complex Masonry layout with some text and image cards*

---

If you want to check out the code for the full code component, please find it <a href="https://github.com/sebcglbailey/framer-x-components/blob/master/Masonry/masonry.tsx" target="_blank">here</a>.

---

Also, feel free to give some appreciation to this article <a href="https://medium.com/@sebcglbailey/an-intro-to-props-children-in-framer-x-ccfda85c76d2" target="_blank">on Medium</a>.