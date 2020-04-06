function getOffset($el){
    if ( !$el[0].getClientRects().length ) {
        return {
            left: $el[0].ownerDocument.defaultView.pageXOffset + $el[0].getBoundingClientRect().x,
            top: $el[0].ownerDocument.defaultView.pageYOffset + $el[0].getBoundingClientRect().y,
        }
    } else {
        return {
            left: $el.offset().left,
            top: $el.offset().top,
        }
    }
}
