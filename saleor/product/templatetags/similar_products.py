from django import template
from django.conf import settings

register = template.Library()

@register.simple_tag(name="get_similar_products_for")
def similar_products(product, limit=5):
    return product.category.products.order_by('?').all()[0:limit]
