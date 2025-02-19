#version 330 core
out vec4 FragColor;

in vec2 TexCoords;

float near = 0.1;
float far = 100.0;

uniform sampler2D texture_diffuse1;

float LinearizeDepth(float depth)
{
	float z = depth * 2.0 - 1.0;
	return (2.0 * near * far) / (far + near - z * (far - near));
}

void main()
{    
    FragColor = texture(texture_diffuse1, TexCoords);
//	FragColor = vec4(vec3(LinearizeDepth(gl_FragCoord.z) / far), 1.0);
}