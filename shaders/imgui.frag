#version 450

#extension GL_ARB_separate_shader_objects : enable
#extension GL_ARB_shading_language_420pack : enable

layout(push_constant) uniform PushConstants
{
  mat4 projection_matrix;
  int restrict_texture_samples;
} push_constants;

layout(set = 0, binding = 0) uniform sampler2D texture_sampler;

layout(location = 0) in vec3 in_color;
layout(location = 1) in vec4 vtx_color;

layout(location = 0) out vec4 out_color;

void main() 
{
	//out_color = vtx_color;
	out_color = vec4(in_color, 1.0);
	/*if (push_constants.restrict_texture_samples == 0 || vtx_uv.x <= 1.0)
	{
		vec4 tex_color = texture(texture_sampler, vtx_uv);
		out_color *= tex_color;
	}*/
}